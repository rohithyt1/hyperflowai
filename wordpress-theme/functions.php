<?php
/**
 * HyperFlow Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Fix output buffering issues
if (ob_get_level()) {
    ob_end_clean();
}

// Theme setup
function hyperflow_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'hyperflow'),
        'footer' => __('Footer Menu', 'hyperflow'),
    ));
}
add_action('after_setup_theme', 'hyperflow_setup');

// Enqueue React app assets
function hyperflow_enqueue_scripts() {
    // Check if we're in production (built files exist)
    $dist_path = get_template_directory() . '/dist/';
    
    // Find the actual built JS and CSS files
    $js_files = glob($dist_path . 'assets/index-*.js');
    $css_files = glob($dist_path . 'assets/index-*.css');
    
    if (!empty($js_files) && !empty($css_files)) {
        // Production build with hashed filenames
        $js_file = basename($js_files[0]);
        $css_file = basename($css_files[0]);
        
        wp_enqueue_script(
            'hyperflow-app',
            get_template_directory_uri() . '/dist/assets/' . $js_file,
            array(),
            '1.0.0',
            true
        );
        
        wp_enqueue_style(
            'hyperflow-style',
            get_template_directory_uri() . '/dist/assets/' . $css_file,
            array(),
            '1.0.0'
        );
    } elseif (file_exists($dist_path . 'assets/index.js')) {
        // Fallback for non-hashed filenames
        wp_enqueue_script(
            'hyperflow-app',
            get_template_directory_uri() . '/dist/assets/index.js',
            array(),
            '1.0.0',
            true
        );
        
        wp_enqueue_style(
            'hyperflow-style',
            get_template_directory_uri() . '/dist/assets/index.css',
            array(),
            '1.0.0'
        );
    } else {
        // Development mode - Vite dev server
        wp_enqueue_script(
            'hyperflow-vite-client',
            'http://localhost:5173/@vite/client',
            array(),
            null,
            true
        );
        
        wp_enqueue_script(
            'hyperflow-app',
            'http://localhost:5173/src/main.tsx',
            array(),
            null,
            true
        );
        
        // Add type="module" to Vite scripts
        add_filter('script_loader_tag', function($tag, $handle) {
            if (in_array($handle, ['hyperflow-vite-client', 'hyperflow-app'])) {
                return str_replace('<script ', '<script type="module" ', $tag);
            }
            return $tag;
        }, 10, 2);
    }
    
    // Pass WordPress data to React
    wp_localize_script('hyperflow-app', 'wpData', array(
        'apiUrl' => home_url('/wp-json/wp/v2/'),
        'nonce' => wp_create_nonce('wp_rest'),
        'siteUrl' => home_url(),
        'themePath' => get_template_directory_uri(),
    ));
}
add_action('wp_enqueue_scripts', 'hyperflow_enqueue_scripts');

// Add REST API endpoints for React app
function hyperflow_register_api_routes() {
    register_rest_route('hyperflow/v1', '/contact', array(
        'methods' => 'POST',
        'callback' => 'hyperflow_handle_contact_form',
        'permission_callback' => '__return_true',
    ));
    
    register_rest_route('hyperflow/v1', '/chat', array(
        'methods' => 'POST',
        'callback' => 'hyperflow_handle_chat_message',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'hyperflow_register_api_routes');

// Handle contact form submissions
function hyperflow_handle_contact_form($request) {
    $params = $request->get_params();
    
    // Sanitize input
    $name = sanitize_text_field($params['name']);
    $email = sanitize_email($params['email']);
    $message = sanitize_textarea_field($params['message']);
    $service = sanitize_text_field($params['service']);
    
    // Validate
    if (empty($name) || empty($email) || empty($message)) {
        return new WP_Error('missing_fields', 'Required fields are missing', array('status' => 400));
    }
    
    if (!is_email($email)) {
        return new WP_Error('invalid_email', 'Invalid email address', array('status' => 400));
    }
    
    // Save to database
    global $wpdb;
    $table_name = $wpdb->prefix . 'hyperflow_contacts';
    
    $result = $wpdb->insert(
        $table_name,
        array(
            'name' => $name,
            'email' => $email,
            'message' => $message,
            'service' => $service,
            'created_at' => current_time('mysql'),
            'status' => 'new'
        ),
        array('%s', '%s', '%s', '%s', '%s', '%s')
    );
    
    if ($result === false) {
        return new WP_Error('db_error', 'Failed to save contact', array('status' => 500));
    }
    
    // Send email notification
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission - HyperFlow';
    $body = "New contact form submission:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Service: $service\n";
    $body .= "Message: $message\n";
    
    wp_mail($to, $subject, $body);
    
    return array('success' => true, 'message' => 'Contact form submitted successfully');
}

// Handle chat messages
function hyperflow_handle_chat_message($request) {
    $params = $request->get_params();
    $message = sanitize_text_field($params['message']);
    
    // Save chat message to database
    global $wpdb;
    $table_name = $wpdb->prefix . 'hyperflow_chat_logs';
    
    $wpdb->insert(
        $table_name,
        array(
            'message' => $message,
            'response' => '', // Will be filled by AI response
            'ip_address' => $_SERVER['REMOTE_ADDR'],
            'user_agent' => $_SERVER['HTTP_USER_AGENT'],
            'created_at' => current_time('mysql')
        ),
        array('%s', '%s', '%s', '%s', '%s')
    );
    
    return array('success' => true);
}

// Create database tables on theme activation
function hyperflow_create_tables() {
    global $wpdb;
    
    $charset_collate = $wpdb->get_charset_collate();
    
    // Contacts table
    $contacts_table = $wpdb->prefix . 'hyperflow_contacts';
    $contacts_sql = "CREATE TABLE $contacts_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name tinytext NOT NULL,
        email varchar(100) NOT NULL,
        message text NOT NULL,
        service varchar(100) DEFAULT '',
        status varchar(20) DEFAULT 'new',
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    ) $charset_collate;";
    
    // Chat logs table
    $chat_table = $wpdb->prefix . 'hyperflow_chat_logs';
    $chat_sql = "CREATE TABLE $chat_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        message text NOT NULL,
        response text DEFAULT '',
        ip_address varchar(45) DEFAULT '',
        user_agent text DEFAULT '',
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    ) $charset_collate;";
    
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($contacts_sql);
    dbDelta($chat_sql);
}
add_action('after_switch_theme', 'hyperflow_create_tables');

// Add admin menu for CRM
function hyperflow_admin_menu() {
    add_menu_page(
        'HyperFlow CRM',
        'HyperFlow CRM',
        'manage_options',
        'hyperflow-crm',
        'hyperflow_crm_page',
        'dashicons-businessperson',
        30
    );
    
    add_submenu_page(
        'hyperflow-crm',
        'Contacts',
        'Contacts',
        'manage_options',
        'hyperflow-contacts',
        'hyperflow_contacts_page'
    );
    
    add_submenu_page(
        'hyperflow-crm',
        'Chat Logs',
        'Chat Logs',
        'manage_options',
        'hyperflow-chat-logs',
        'hyperflow_chat_logs_page'
    );
}
add_action('admin_menu', 'hyperflow_admin_menu');

// CRM Dashboard page
function hyperflow_crm_page() {
    global $wpdb;
    
    $contacts_count = $wpdb->get_var("SELECT COUNT(*) FROM {$wpdb->prefix}hyperflow_contacts");
    $chat_count = $wpdb->get_var("SELECT COUNT(*) FROM {$wpdb->prefix}hyperflow_chat_logs WHERE DATE(created_at) = CURDATE()");
    
    echo '<div class="wrap">';
    echo '<h1>HyperFlow CRM Dashboard</h1>';
    echo '<div class="dashboard-widgets-wrap">';
    echo '<div class="postbox" style="width: 300px; display: inline-block; margin: 10px;">';
    echo '<h2>Total Contacts</h2>';
    echo '<div style="padding: 20px; font-size: 24px; text-align: center;">' . $contacts_count . '</div>';
    echo '</div>';
    echo '<div class="postbox" style="width: 300px; display: inline-block; margin: 10px;">';
    echo '<h2>Today\'s Chats</h2>';
    echo '<div style="padding: 20px; font-size: 24px; text-align: center;">' . $chat_count . '</div>';
    echo '</div>';
    echo '</div>';
    echo '</div>';
}

// Contacts page
function hyperflow_contacts_page() {
    global $wpdb;
    
    $contacts = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}hyperflow_contacts ORDER BY created_at DESC LIMIT 50");
    
    echo '<div class="wrap">';
    echo '<h1>Contact Submissions</h1>';
    echo '<table class="wp-list-table widefat fixed striped">';
    echo '<thead><tr><th>Name</th><th>Email</th><th>Service</th><th>Message</th><th>Date</th><th>Status</th></tr></thead>';
    echo '<tbody>';
    
    foreach ($contacts as $contact) {
        echo '<tr>';
        echo '<td>' . esc_html($contact->name) . '</td>';
        echo '<td>' . esc_html($contact->email) . '</td>';
        echo '<td>' . esc_html($contact->service) . '</td>';
        echo '<td>' . esc_html(substr($contact->message, 0, 100)) . '...</td>';
        echo '<td>' . esc_html($contact->created_at) . '</td>';
        echo '<td>' . esc_html($contact->status) . '</td>';
        echo '</tr>';
    }
    
    echo '</tbody></table>';
    echo '</div>';
}

// Chat logs page
function hyperflow_chat_logs_page() {
    global $wpdb;
    
    $chats = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}hyperflow_chat_logs ORDER BY created_at DESC LIMIT 100");
    
    echo '<div class="wrap">';
    echo '<h1>Chat Logs</h1>';
    echo '<table class="wp-list-table widefat fixed striped">';
    echo '<thead><tr><th>Message</th><th>IP Address</th><th>Date</th></tr></thead>';
    echo '<tbody>';
    
    foreach ($chats as $chat) {
        echo '<tr>';
        echo '<td>' . esc_html(substr($chat->message, 0, 150)) . '...</td>';
        echo '<td>' . esc_html($chat->ip_address) . '</td>';
        echo '<td>' . esc_html($chat->created_at) . '</td>';
        echo '</tr>';
    }
    
    echo '</tbody></table>';
    echo '</div>';
}

// Remove WordPress admin bar for cleaner React app experience
add_filter('show_admin_bar', '__return_false');