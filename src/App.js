import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Page1 = lazy(() => import("./pages/Page1"));

// Routes configuration
const routes = [
  { path: "/", element: <Home /> },
  { path: "/page1", element: <Page1 /> }
];

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Page error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center p-6 max-w-md bg-card rounded-xl shadow-card">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h2>
            <p className="mb-6 text-muted">The page couldn't be loaded properly.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-accent text-text rounded-lg hover:bg-accent/80 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text font-sans">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow pt-16">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {routes.map((route) => (
                <Route 
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

export default App;