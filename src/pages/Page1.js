import { memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '@components/ui/Button';

const Page1 = memo(() => (
  <div className="min-h-screen py-20">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-4">Page 1</h1>
      <p className="text-text/70 mb-8">
        This is a sample page. Customize it however you want!
      </p>

      {/* Button Examples */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      {/* Simple Cards */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-surface p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Card Title</h3>
            <p className="text-text/60">Simple card component with padding and rounded corners.</p>
          </div>
          <div className="bg-surface p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Another Card</h3>
            <p className="text-text/60">Easy to customize and extend.</p>
          </div>
        </div>
      </div>

      <Link to="/" className="text-accent hover:underline">
        ← Back to Home
      </Link>
    </div>
  </div>
));

Page1.displayName = 'Page1';

export default Page1;