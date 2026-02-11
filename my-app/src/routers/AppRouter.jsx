
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PageHome from "../routes/PageHome";
import PageAbout from "../routes/PageAbout";
import PageProjects from "../routes/PageProjects";
import PageSingleProject from "../routes/PageSingleProject";
import PageProposals from "../routes/PageProposals";
import Nav from "../components/Nav";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Loader from "../components/Loader";
import InteractiveBubble from "../components/InteractiveBubble";


function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <ScrollToTop />
      <InteractiveBubble />

      <div className="wrapper">
        <TopBar />
        <Nav />

        <div className="wrapper-content">
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/projects" element={<PageProjects />} />
            <Route path="/propostas/:id" element={<PageProposals />} />
            <Route path="/projects/:id" element={<PageSingleProject />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default AppRouter;
