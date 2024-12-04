function Home() {
  const features = [
    {
      title: 'Modern Stack',
      description: 'Built with React 17 and React Router v6'
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development'
    },
    {
      title: 'Clean Structure',
      description: 'Organized component architecture for scalability'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to RePlate
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A modern React application template with everything you need to get started.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;