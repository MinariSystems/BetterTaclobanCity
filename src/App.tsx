import { NuqsAdapter } from 'nuqs/adapters/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Government from './pages/Government';
import ScrollToTop from './components/ui/ScrollToTop';
import { PreviewProvider } from './components/PreviewContext';
import { Community, Safety } from './components/home/CitySections';
import SEO from './components/SEO';
function App() {
  return (
    <HelmetProvider>
      <Router>
        <NuqsAdapter>
          <PreviewProvider>
            <a className="skip-link" href="#main">
              Skip to content
            </a>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:category" element={<Services />} />
              <Route path="/government" element={<Government />} />
              <Route
                path="/about"
                element={
                  <main id="main">
                    <SEO title="About the project" />
                    <Community />
                    <Safety />
                  </main>
                }
              />
              <Route
                path="*"
                element={
                  <main className="section container" id="main">
                    <SEO title="Page not found" />
                    <div className="eyebrow">LET’S GET YOU BACK ON TRACK</div>
                    <h1>That page isn’t here.</h1>
                    <p>
                      Find city services and local information on the home page.
                    </p>
                    <Link className="primary-button" to="/">
                      Go to BetterTaclobanCity
                    </Link>
                  </main>
                }
              />
            </Routes>
            <Footer />
          </PreviewProvider>
        </NuqsAdapter>
      </Router>
    </HelmetProvider>
  );
}
export default App;
