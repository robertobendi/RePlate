import { memo } from 'react';
import config from '../lib/config';

const Footer = memo(() => {
  const { site } = config;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface border-t border-border-primary font-sans">
      <div className="max-w-5xl mx-auto px-4">
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-secondary text-sm">
            © {currentYear} {site.author}. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href={site.links.github}
              className="text-text-accent text-sm transition-all duration-fast hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub repository"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;