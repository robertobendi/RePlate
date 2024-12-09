export default {
  "theme": {
    "_colorsDocs": "Core color palette for consistent styling",
    "colors": {
      "primary": "#0052ff", 
      "secondary": "#003399",
      "accent": "#1e6bff",
      "background": "#001a4d",
      "surface": "#002266",
      "text": {
        "primary": "#ffffff",
        "secondary": "#bcd5ff",
        "accent": "#4d8eff"
      },
      "border": {
        "primary": "#003399",
        "secondary": "#001a4d"
      }
    },

    "_fontDocs": "Typography settings including font families and size scale",
    "font": {
      "primary": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      "code": "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      "sizes": {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem"
      }
    },

    "_spacingDocs": "Layout spacing configurations",
    "spacing": {
      "container": {
        "max": "5xl",
        "padding": {
          "default": "1rem",
          "sm": "1.5rem"
        }
      }
    },

    "_borderRadiusDocs": "Border radius presets for consistent component shapes",
    "borderRadius": {
      "sm": "0.25rem",
      "default": "0.5rem", 
      "lg": "1rem",
      "full": "9999px"
    },

    "_styleDocs": "Additional styling utilities including shadows and transitions",
    "style": {
      "shadows": {
        "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "default": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      },
      "transitions": {
        "default": "all 0.3s ease",
        "fast": "all 0.15s ease",
        "slow": "all 0.45s ease"
      }
    }
  },

  "_siteDocs": "Site metadata and configuration",
  "site": {
    "name": "RePlate",
    "description": "A modern React application template crafted with attention to detail",
    "author": "Roberto Bendinelli",
    "links": {
      "github": "https://github.com/robertobendi",
      "documentation": "/docs"
    }
  },

  "_navigationDocs": "Site navigation structure",
  "navigation": {
    "menu": [
      {
        "label": "Home",
        "path": "/"
      },
      {
        "label": "Page 1",
        "path": "/page1"
      }
    ]
  }
}