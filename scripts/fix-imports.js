const fs = require('fs');
const path = require('path');

class SmartImportFixer {
  constructor(rootDir) {
    this.rootDir = rootDir;
    this.filePathMap = new Map();
    this.imagePathMap = new Map();
  }

  scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        this.scanDirectory(fullPath);
      } else {
        const ext = path.extname(file);
        const basename = path.basename(file, ext);
        
        if (['.js', '.jsx'].includes(ext)) {
          this.filePathMap.set(basename, fullPath);
        } else if (['.png', '.jpg', '.jpeg', '.svg'].includes(ext)) {
          this.imagePathMap.set(basename, fullPath);
        }
      }
    });
  }

  fixImports(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix JS imports
    content = content.replace(
      /import\s+(?:{[^}]+}|\w+)\s+from\s+['"]([^'"]+)['"]/g,
      (match, importPath) => {
        const basename = path.basename(importPath).replace(/\.(js|jsx)$/, '');
        if (this.filePathMap.has(basename)) {
          const targetPath = this.filePathMap.get(basename);
          const relativePath = path.relative(path.dirname(filePath), path.dirname(targetPath))
            .replace(/\\/g, '/');
          const newPath = (relativePath ? './' + relativePath + '/' : './') + basename;
          return match.replace(importPath, newPath);
        }
        return match;
      }
    );

    // Fix image imports
    content = content.replace(
      /import\s+(\w+)\s+from\s+['"](.*?\.(png|jpg|jpeg|svg))['"]/g,
      (match, importName, importPath) => {
        const basename = path.basename(importPath, path.extname(importPath));
        if (this.imagePathMap.has(basename)) {
          const targetPath = this.imagePathMap.get(basename);
          const relativePath = path.relative(path.dirname(filePath), path.dirname(targetPath))
            .replace(/\\/g, '/');
          const newPath = (relativePath ? './' + relativePath + '/' : './') + path.basename(importPath);
          return `import ${importName} from '${newPath}'`;
        }
        return match;
      }
    );

    // Fix websiteInfo.json
    if (filePath.endsWith('websiteInfo.js')) {
      content = content.replace(/export default\s+export default\s+export default\s+/, 'export default ');
    }

    fs.writeFileSync(filePath, content);
  }

  fix() {
    this.scanDirectory(this.rootDir);
    this.filePathMap.forEach((filePath) => this.fixImports(filePath));
  }
}

const fixer = new SmartImportFixer(path.resolve(__dirname, '../src'));
fixer.fix();