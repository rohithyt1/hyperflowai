# HyperFlow WordPress Theme

This WordPress theme integrates the HyperFlow React application with WordPress, providing CRM functionality and database storage.

## Installation

1. Copy the `wordpress-theme` folder to your WordPress `wp-content/themes/` directory
2. Rename the folder to `hyperflow`
3. Copy your React app's `dist` folder (after running `npm run build`) into the theme directory
4. Activate the theme in WordPress admin

## Development Setup

For development with Vite dev server:

1. Start your React dev server: `npm run dev`
2. The theme will automatically load assets from `http://localhost:5173`

For production:

1. Build your React app: `npm run build`
2. Copy the `dist` folder to the WordPress theme directory
3. The theme will serve the built assets

## Features

### CRM Integration
- Contact form submissions are stored in WordPress database
- Chat logs are tracked
- Admin dashboard with analytics
- Email notifications for new contacts

### API Endpoints
- `/wp-json/hyperflow/v1/contact` - Handle contact form submissions
- `/wp-json/hyperflow/v1/chat` - Log chat interactions

### Database Tables
- `wp_hyperflow_contacts` - Contact form submissions
- `wp_hyperflow_chat_logs` - Chat interaction logs

### Admin Features
- CRM Dashboard in WordPress admin
- View and manage contacts
- Monitor chat activity
- Export data capabilities

## Configuration

### Environment Variables
Add these to your `wp-config.php`:

```php
// HyperFlow API Keys
define('HYPERFLOW_ELEVENLABS_API_KEY', 'your-elevenlabs-key');
define('HYPERFLOW_STRIPE_SECRET_KEY', 'your-stripe-secret-key');
define('HYPERFLOW_STRIPE_PUBLISHABLE_KEY', 'your-stripe-publishable-key');
```

### WordPress Integration Points

The React app can access WordPress data via:

```javascript
// Available globally in React app
window.wpData = {
    apiUrl: '/wp-json/wp/v2/',
    nonce: 'wp-rest-nonce',
    siteUrl: 'https://yoursite.com',
    themePath: '/wp-content/themes/hyperflow'
};
```

## File Structure

```
wordpress-theme/
├── style.css          # WordPress theme header
├── index.php          # Main template
├── functions.php      # Theme functions & API
├── header.php         # HTML head
├── footer.php         # Footer template
├── dist/              # React build files (copy here)
│   ├── assets/
│   │   ├── index.js
│   │   └── index.css
│   └── index.html
└── README.md          # This file
```

## Customization

### Adding New API Endpoints

```php
// In functions.php
function hyperflow_custom_endpoint($request) {
    // Your custom logic
    return array('success' => true);
}

add_action('rest_api_init', function() {
    register_rest_route('hyperflow/v1', '/custom', array(
        'methods' => 'POST',
        'callback' => 'hyperflow_custom_endpoint',
        'permission_callback' => '__return_true',
    ));
});
```

### Database Schema Extensions

```php
// Add new columns to existing tables
function hyperflow_update_schema() {
    global $wpdb;
    
    $wpdb->query("ALTER TABLE {$wpdb->prefix}hyperflow_contacts 
                  ADD COLUMN phone VARCHAR(20) DEFAULT ''");
}
add_action('after_switch_theme', 'hyperflow_update_schema');
```

## Deployment

1. Build React app: `npm run build`
2. Upload theme to WordPress
3. Copy `dist` folder to theme directory
4. Activate theme
5. Configure API keys in wp-config.php

## Support

For technical support with WordPress integration, contact the HyperFlow development team.