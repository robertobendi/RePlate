import websiteInfo from '../utils/websiteInfo';

function Page1() {
  const importFixerCode = `const fixer = new SmartImportFixer('./src');

// Maps file locations
scanDirectory(dir) {
  // Scans recursively for .js and asset files
  // Maps file paths to their locations
}

// Calculates relative paths
fixImports(filePath) {
  // Updates import statements
  // Handles JS/JSX imports
  // Handles image imports
  // Fixes JSON conversions
}`;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12">
        <h1 className="text-3xl font-semibold mb-8 text-text-primary">
          Project Tools
        </h1>

        {/* Import Fixer Section */}
        <div className="mb-12 p-8 bg-surface rounded-lg shadow-lg">
          <h2 className="text-2xl font-medium mb-6 text-text-primary">
            Import Fixer Tool
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl mb-4 text-text-accent">
                What it does
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Automatically fixes import paths</li>
                <li>• Handles JavaScript and asset files</li>
                <li>• Updates relative paths based on file location</li>
                <li>• Converts JSON to JS modules</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl mb-4 text-text-accent">
                How to use
              </h3>
              <div className="text-text-secondary">
                <p className="mb-4">1. Place in <code>scripts/fix-imports.js</code></p>
                <p>2. Run:</p>
                <pre className="p-3 mt-2 rounded bg-background">
                  node scripts/fix-imports.js
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4 text-text-accent">
              Code Overview
            </h3>
            <pre className="p-4 rounded-lg overflow-x-auto bg-background text-text-primary text-sm">
              <code>{importFixerCode}</code>
            </pre>
          </div>
        </div>

        {/* Theme Tutorial Section */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="shadow-lg p-6 bg-surface rounded">
            <h2 className="text-xl font-medium mb-4 text-text-primary">
              Theme System
            </h2>
            <p className="leading-relaxed text-text-secondary">
              RePlate uses a central theme configuration in websiteInfo.js. Import and destructure
              the theme object to access colors, typography, spacing, and other design tokens.
            </p>
          </div>

          <div className="shadow-lg p-6 bg-surface rounded">
            <h2 className="text-xl font-medium mb-4 text-text-primary">
              Project Structure
            </h2>
            <p className="leading-relaxed text-text-secondary">
              Components are organized by feature and layout. Assets and styles have dedicated
              directories. Utils contain shared code and configurations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;