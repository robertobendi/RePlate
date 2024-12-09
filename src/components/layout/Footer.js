import websiteInfo from './../../utils/websiteInfo';

function Footer() {
  const { theme, site } = websiteInfo;
  return (
    <footer style={{ 
      backgroundColor: theme.colors.surface,
      borderTop: `1px solid ${theme.colors.border.primary}`,
      fontFamily: theme.font.primary
    }}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div style={{ 
            color: theme.colors.text.secondary,
            fontSize: theme.font.sizes.sm
          }}>
            © {new Date().getFullYear()} {site.author}. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href={site.links.github}
              style={{ 
                color: theme.colors.text.accent,
                fontSize: theme.font.sizes.sm,
                transition: theme.style.transitions.fast
              }}
              className="hover:opacity-75"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;