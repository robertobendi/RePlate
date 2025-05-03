import config from '../lib/config';

export default function Footer() {
  const { site } = config;
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-900 py-8 mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <span>© {year} {site.author}. All rights reserved.</span>
        <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a>
      </div>
    </footer>
  );
} 