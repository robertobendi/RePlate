#!/bin/bash

# Colors for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to show colorful messages
log_info() {
  echo -e "${BLUE}INFO:${NC} $1"
}

log_success() {
  echo -e "${GREEN}SUCCESS:${NC} $1"
}

log_warning() {
  echo -e "${YELLOW}WARNING:${NC} $1"
}

log_error() {
  echo -e "${RED}ERROR:${NC} $1"
  exit 1
}

# Check Node.js version
check_node_version() {
  node_version=$(node -v | cut -d 'v' -f 2)
  major_version=$(echo $node_version | cut -d '.' -f 1)
  
  log_info "Detected Node.js version: $node_version"
  
  if [ $major_version -lt 18 ]; then
    log_warning "Vite 5.x requires Node.js version 18 or higher."
    log_warning "You are currently using Node.js $node_version"
    echo ""
    log_info "You have two options:"
    log_info "1. Update your Node.js version to 18 or higher (recommended)"
    log_info "2. Install an older version of Vite compatible with your Node.js version"
    echo ""
    read -p "Do you want to continue anyway? (y/n): " node_confirm
    
    if [[ $node_confirm != "y" && $node_confirm != "Y" ]]; then
      log_info "Migration cancelled. Please update your Node.js version and try again."
      exit 0
    fi
  fi
}

# Check if the current directory is a React app
check_react_app() {
  if [ ! -f package.json ]; then
    log_error "No package.json found. Please run this script in the root of your React project."
  fi
  
  if ! grep -q "react-scripts" package.json; then
    log_error "This doesn't appear to be a Create React App project. No 'react-scripts' found in package.json."
  fi
  
  log_info "Create React App project detected."
}

# Update package.json
update_package_json() {
  log_info "Updating package.json..."
  
  # Backup package.json
  cp package.json package.json.bak
  
  # Use Node.js to update package.json
  node -e '
    const fs = require("fs");
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
    
    // Update scripts
    pkg.scripts = pkg.scripts || {};
    pkg.scripts.dev = "vite";
    pkg.scripts.build = "vite build";
    pkg.scripts.preview = "vite preview";
    delete pkg.scripts.eject;
    
    // Keep start for compatibility
    if (pkg.scripts.start) {
      pkg.scripts.start = "vite";
    }
    
    // Add browserslist support
    if (!pkg.devDependencies) pkg.devDependencies = {};
    pkg.devDependencies["browserslist-to-esbuild"] = "latest";
    
    // Write updated package.json
    fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2));
  '
  
  if [ $? -ne 0 ]; then
    mv package.json.bak package.json
    log_error "Failed to update package.json. Reverting changes."
  fi
  
  log_success "package.json updated successfully."
}

# Install dependencies
update_dependencies() {
  log_info "Updating dependencies..."
  
  # Uninstall CRA dependencies
  log_info "Removing react-scripts and related dependencies..."
  npm uninstall react-scripts
  
  # Install Vite and necessary plugins
  log_info "Installing Vite and plugins..."
  npm install --save-dev vite @vitejs/plugin-react browserslist-to-esbuild vite-plugin-svgr
  
  log_success "Dependencies updated successfully."
}

# Create configuration files for Vite
create_vite_config() {
  log_info "Creating Vite configuration files..."
  
  # Create vite.config.js with appropriate configuration
  cat > vite.config.js << EOL
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { browserslistToEsbuild } from 'browserslist-to-esbuild';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr() // Allows importing SVGs as React components
  ],
  build: {
    outDir: 'build', // Match CRA's build directory
    target: browserslistToEsbuild(), // Use browserslist config for compatibility
  },
  server: {
    port: 3000, // Match CRA's default port
    open: true,
  },
  resolve: {
    alias: {
      // Add any aliases you might have in jsconfig/tsconfig
      // '@': '/src',
    }
  },
});
EOL
  
  # Create environment configuration for TypeScript projects
  if [ -f tsconfig.json ]; then
    mkdir -p src/types
    cat > src/types/environment.d.ts << EOL
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // Add more environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
EOL
    
    # Update TypeScript configuration
    log_info "Updating TypeScript configuration..."
    cat > tsconfig.json << EOL
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "."
  },
  "include": ["src", "vite.config.ts", "src/types/environment.d.ts"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
EOL

    cat > tsconfig.node.json << EOL
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
EOL
  fi
  
  log_success "Vite configuration files created successfully."
}

# Migrate public directory and index.html
migrate_index_html() {
  log_info "Migrating public directory and index.html..."
  
  if [ ! -d public ] || [ ! -f public/index.html ]; then
    log_error "Could not find public/index.html. Is this a standard CRA project?"
  fi
  
  # Copy index.html to root
  cp public/index.html ./index.html
  
  # Update index.html for Vite
  # Add module script for entry point
  sed -i.bak '/<\/head>/i\    <script type="module" src="\/src\/index.jsx"></script>' index.html
  
  # Replace %PUBLIC_URL% with empty string (assets are served from root in Vite)
  sed -i.bak 's/%PUBLIC_URL%\///g' index.html
  
  # Remove default CRA comments
  sed -i.bak '/<!-- If you open this file directly in the browser/d' index.html
  sed -i.bak '/<!-- This HTML file is a template/d' index.html
  sed -i.bak '/<!-- You can add webfonts, meta tags, or analytics to this file/d' index.html
  sed -i.bak '/<!-- The build step will place the bundled scripts into the <body> tag/d' index.html
  sed -i.bak '/<!-- To begin the development, run `npm start` or `yarn start`/d' index.html
  sed -i.bak '/<!-- To create a production bundle, use `npm run build` or `yarn build`/d' index.html
  
  # Check if we need to adjust for .tsx instead of .jsx
  if [ -f src/index.tsx ]; then
    sed -i.bak 's/index.jsx/index.tsx/g' index.html
  elif [ -f src/index.js ] && [ ! -f src/index.jsx ]; then
    # If only .js exists (not .jsx), we'll keep the reference as .js
    sed -i.bak 's/index.jsx/index.js/g' index.html
  fi
  
  # Cleanup backup files
  rm -f index.html.bak
  
  log_success "index.html migrated successfully."
}

# Update source files for Vite compatibility
update_source_files() {
  log_info "Updating source files for Vite compatibility..."
  
  # Update environment variables in all source files
  log_info "Updating environment variables in source files..."
  find src -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) -exec sed -i.bak 's/process\.env\.REACT_APP_/import.meta.env.VITE_/g' {} \;
  
  # Handle SVG imports for SVGR compatibility
  log_info "Updating SVG imports for Vite compatibility..."
  find src -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) -exec sed -i.bak 's/import\s\+\([A-Za-z0-9]\+\)\s\+from\s\+"\([^"]\+\.svg\)"/import \1 from "\2?react"/g' {} \;
  
  # Remove backup files
  find src -name "*.bak" -delete
  
  # Handle .env files
  if [ -f .env ]; then
    log_info "Updating .env files..."
    cp .env .env.bak
    sed -i.bak 's/REACT_APP_/VITE_/g' .env
    rm -f .env.bak
  fi
  
  if [ -f .env.development ]; then
    cp .env.development .env.development.bak
    sed -i.bak 's/REACT_APP_/VITE_/g' .env.development
    rm -f .env.development.bak
  fi
  
  if [ -f .env.production ]; then
    cp .env.production .env.production.bak
    sed -i.bak 's/REACT_APP_/VITE_/g' .env.production
    rm -f .env.production.bak
  fi
  
  log_success "Source files updated successfully."
}

# Final cleanup and instructions
final_cleanup() {
  log_info "Performing final cleanup..."
  
  # Remove unnecessary CRA files
  rm -f src/react-app-env.d.ts
  
  # Create a documentation file with migration notes
  cat > VITE_MIGRATION.md << EOL
# CRA to Vite Migration

This project has been migrated from Create React App to Vite.

## New Commands

- \`npm run dev\` - Starts the development server
- \`npm run build\` - Builds the application for production
- \`npm run preview\` - Previews the built application

## Environment Variables

- All environment variables have been renamed from \`REACT_APP_*\` to \`VITE_*\`
- In your code, replace \`process.env.REACT_APP_*\` with \`import.meta.env.VITE_*\`

## Major Changes

- The entry point is now \`/index.html\` in the project root (moved from \`public/\`)
- Static assets remain in the \`public/\` directory
- SVG imports now use \`?react\` suffix for component usage

## TypeScript Changes

If you're using TypeScript:
- Types for environment variables are in \`src/types/environment.d.ts\`
- Updated \`tsconfig.json\` with Vite-specific settings

For more information, see the [Vite documentation](https://vitejs.dev/guide/).
EOL
  
  log_success "Final cleanup completed."
  log_success "CRA to Vite migration completed successfully!"
  log_info "Please check the VITE_MIGRATION.md file for important information about the migration."
  log_info "Start your development server with: npm run dev"
}

# Main script execution
main() {
  echo -e "${BLUE}====================================${NC}"
  echo -e "${GREEN}   Create React App to Vite Migration   ${NC}"
  echo -e "${BLUE}====================================${NC}"
  echo ""
  
  check_node_version
  check_react_app
  
  echo ""
  log_warning "This script will modify your project significantly."
  read -p "Do you want to proceed? (y/n): " confirm
  
  if [[ $confirm != "y" && $confirm != "Y" ]]; then
    log_info "Migration cancelled. No changes were made."
    exit 0
  fi
  
  update_package_json
  update_dependencies
  create_vite_config
  migrate_index_html
  update_source_files
  final_cleanup
  
  echo ""
  echo -e "${GREEN}====================================${NC}"
  echo -e "${GREEN}   Migration Completed Successfully!   ${NC}"
  echo -e "${GREEN}====================================${NC}"
}

# Execute main function
main