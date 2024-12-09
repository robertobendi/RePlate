#!/bin/bash

# Create new directory structure
mkdir -p src/components/layout
mkdir -p src/components/features
mkdir -p src/pages
mkdir -p src/styles/modules
mkdir -p src/utils
mkdir -p src/assets/img

# Move files to new locations
mv src/Navbar.js src/components/layout/
mv src/Footer.js src/components/layout/
mv src/Home.js src/pages/
mv src/Page1.js src/pages/
mv src/index.css src/styles/
mv src/Navigation.module.css src/styles/modules/
mv src/Pages.module.css src/styles/modules/
mv src/websiteInfo.json src/utils/websiteInfo.js
mv src/img/* src/assets/img/

# Update imports in files
sed -i '' 's/from ".\/Navbar"/from "..\/components\/layout\/Navbar"/' src/App.js
sed -i '' 's/from ".\/Footer"/from "..\/components\/layout\/Footer"/' src/App.js
sed -i '' 's/from ".\/Home"/from "..\/pages\/Home"/' src/App.js
sed -i '' 's/from ".\/Page1"/from "..\/pages\/Page1"/' src/App.js
sed -i '' 's/from ".\/Navigation.module.css"/from "..\/styles\/modules\/Navigation.module.css"/' src/components/layout/Navbar.js
sed -i '' 's/from ".\/Pages.module.css"/from "..\/styles\/modules\/Pages.module.css"/' src/pages/Page1.js
sed -i '' 's/from ".\/websiteInfo.json"/from "..\/utils\/websiteInfo"/' src/pages/Home.js
sed -i '' 's/from ".\/img\/logo.png"/from "..\/assets\/img\/logo.png"/' src/pages/Home.js

# Convert websiteInfo.json to .js
echo "export default" | cat - src/utils/websiteInfo.js > temp && mv temp src/utils/websiteInfo.js

echo "Project structure reorganized successfully!"