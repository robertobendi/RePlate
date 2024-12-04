function Page1() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">
        Page 1
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">
            Section 1
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This is a minimal and modern section with clean typography and proper spacing.
            Add your content here and it will look great with this styling.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">
            Section 2
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Another beautifully styled section with consistent design language.
            Your content will be easy to read and visually appealing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page1;