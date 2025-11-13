import { memo } from 'react';
import config from '@lib/config';

const Footer = memo(() => {
  const { site } = config;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text/60 text-sm">
            © {currentYear} {site.author}
          </p>
          <a
            href={site.links.github}
            className="text-text/60 hover:text-text text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;