import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../routes/PageHome";
import PageAbout from "../routes/PageAbout";
import PageProjects from "../routes/PageProjects";
import PageSingleProject from "../routes/PageSingleProject";
import PageProposals from "../routes/PageProposals";
import Nav from "../components/Nav";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

import InteractiveBubble from "../components/InteractiveBubble";

function AppRouter() {
  return (
    <BrowserRouter>
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
     
    </BrowserRouter>
  );
}

export default AppRouter;
