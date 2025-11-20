// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

// Lazy-loaded pages for better performance
const Home = lazy(() => import("./pages/Home/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const VenturesPage = lazy(() => import("./pages/VenturesPage/VenturesPage"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
import Contact from "./components/Contact/Contact";

function ScrollToHash() {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    if (!id) return;

    // small delay so target component has a chance to mount
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback retry after a short delay (useful for heavy components)
        setTimeout(() => {
          const el2 = document.getElementById(id);
          if (el2) el2.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }, 60);

    return () => clearTimeout(t);
  }, [location.hash, location.pathname]);

  return null;
}

/**
 * Loader - site-wide minimal loader used while lazy-loaded pages download.
 */
function Loader() {
  return (
    <div
      style={{
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div className="app-loader" aria-hidden>
        Loading...
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ventures" element={<VenturesPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact/>} />
        {/* 404 route */}
        <Route path="*" element={<div style={{ padding: 48, textAlign: "center" }}><h2>404 — Page not found</h2></div>} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <Header />

      <main>
        <AppRoutes />

        {/* watches location changes and scrolls to any hash target */}
        <ScrollToHash />
      </main>

      <Footer />
    </Router>
  );
}

export default App;
