import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load pages with naming for better debugging
const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"));
const Page1 = lazy(() => import(/* webpackChunkName: "page1" */ "./pages/Page1"));

// Routes configuration - easier to maintain
const routes = [
  { path: "/", element: <Home />, exact: true },
  { path: "/page1", element: <Page1 /> }
];

// Enhanced loading with subtle animation
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      <p className="mt-4 text-muted animate-pulse">Loading...</p>
    </div>
  </div>
);

// Improved error boundary with better UX
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Optionally log error to a service
    console.error("Page error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="text-center p-8 max-w-md bg-card rounded-xl shadow-card">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h2>
            <p className="mb-6 text-muted">We're sorry for the inconvenience. The page couldn't be loaded properly.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-accent text-text rounded-lg hover:bg-accent/80 transition-colors"
              >
                Reload Page
              </button>
              <button
                onClick={() => window.history.back()}
                className="px-4 py-2 bg-surface text-text rounded-lg hover:bg-surface/80 transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// ScrollToTop component for better UX when navigating
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
      <main className="flex-grow pt-16"> {/* Added padding-top to account for fixed navbar */}
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {routes.map((route) => (
                <Route 
                  key={route.path}
                  path={route.path}
                  element={route.element}
                  exact={route.exact}
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