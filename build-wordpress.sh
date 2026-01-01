#!/bin/bash

# HyperFlow WordPress Build Script
# This script builds the React app and prepares it for WordPress integration

echo "🚀 Building HyperFlow for WordPress..."

# Build the React application
echo "📦 Building React app..."
npm run build

# Create WordPress theme directory
echo "📁 Creating WordPress theme structure..."
rm -rf wordpress-build
mkdir -p wordpress-build/hyperflow

# Copy WordPress theme files to root of theme directory
echo "📋 Copying WordPress theme files..."
cp wordpress-theme/style.css wordpress-build/hyperflow/
cp wordpress-theme/index.php wordpress-build/hyperflow/
cp wordpress-theme/functions.php wordpress-build/hyperflow/
cp wordpress-theme/header.php wordpress-build/hyperflow/
cp wordpress-theme/footer.php wordpress-build/hyperflow/
cp wordpress-theme/README.md wordpress-build/hyperflow/

# Copy built React app to dist subdirectory
echo "⚛️ Copying React build files..."
mkdir -p wordpress-build/hyperflow/dist
cp -r dist/* wordpress-build/hyperflow/dist/

# Copy assets to theme assets directory
echo "🖼️ Copying assets..."
mkdir -p wordpress-build/hyperflow/assets
cp -r src/assets/* wordpress-build/hyperflow/assets/

# Create screenshot.png for theme
echo "🖼️ Creating theme screenshot..."
cp src/assets/hero-ai-robot.jpg wordpress-build/hyperflow/screenshot.png

# Create zip file for easy installation
echo "📦 Creating installation package..."
cd wordpress-build
zip -r hyperflow-wordpress-theme.zip hyperflow/
cd ..

echo "✅ WordPress theme build complete!"
echo ""
echo "Installation instructions:"
echo "1. Upload wordpress-build/hyperflow-wordpress-theme.zip to WordPress"
echo "2. Extract in wp-content/themes/"
echo "3. Activate the HyperFlow theme"
echo "4. Configure API keys in wp-config.php"
echo ""
echo "Files created:"
echo "- wordpress-build/hyperflow/ (theme directory)"
echo "- wordpress-build/hyperflow-wordpress-theme.zip (installation package)"