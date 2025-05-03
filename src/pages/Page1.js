import { memo } from 'react';
import Button from '../components/ui/Button';
import { useState } from "react";
import { Link } from "react-router-dom";
import config from '../lib/config';
import logo from '../assets/img/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';

const buttonVariants = [
  { variant: 'primary', label: 'Primary Button' },
  { variant: 'outline', label: 'Outline Button' }
];

const Page1 = memo(() => (
  <div className="min-h-screen">
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="hero-title mb-6">Template Features</h1>
          <p className="hero-desc">
            Explore the components and features available in this template.
          </p>
        </div>

        {/* Button Variants */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Button Variants</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {buttonVariants.map(({ variant, label }) => (
              <Button key={variant} variant={variant}>
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Card Examples */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <h3 className="card-title text-blue-400 mb-4">Hover Effect</h3>
            <p className="card-desc">
              Cards with smooth hover animations and transitions.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title text-blue-400 mb-4">Modern Dark Theme</h3>
            <p className="card-desc">
              Components with a beautiful, modern dark palette.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="card bg-gray-800 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to use this template?</h2>
          <p className="card-desc mb-6">
            Start building your app with a clean, modern foundation.
          </p>
          <Button className="btn-outline" to="/">Back to Home</Button>
        </div>
      </div>
    </section>
  </div>
));

Page1.displayName = 'Page1';

export default Page1;