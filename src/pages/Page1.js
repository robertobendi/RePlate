import websiteInfo from './websiteInfo.json';

function Page1() {
  const { theme } = websiteInfo;

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12">
        <h1 className="text-3xl font-semibold mb-8" style={{ color: theme.colors.text.primary }}>
          Page 1
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="shadow-lg p-6" style={{ 
            backgroundColor: theme.colors.surface, 
            borderRadius: theme.borderRadius.default 
          }}>
            <h2 className="text-xl font-medium mb-4" style={{ color: theme.colors.text.primary }}>
              Section 1
            </h2>
            <p className="leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              This is a minimal and modern section with clean typography and proper spacing.
              Add your content here and it will look great with this styling.
            </p>
          </div>

          <div className="shadow-lg p-6" style={{ 
            backgroundColor: theme.colors.surface, 
            borderRadius: theme.borderRadius.default 
          }}>
            <h2 className="text-xl font-medium mb-4" style={{ color: theme.colors.text.primary }}>
              Section 2
            </h2>
            <p className="leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              Another beautifully styled section with consistent design language.
              Your content will be easy to read and visually appealing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;