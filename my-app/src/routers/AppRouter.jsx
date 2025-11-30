import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../routes/PageHome";
import PageAbout from "../routes/PageAbout";
import PageProjects from "../routes/PageProjects";
import PageSingleProject from "../routes/PageSingleProject";
import Nav from "../components/Nav";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import Footer from "../components/Footer";
import SpotifyCallback from "../routes/SpotifyCallback";

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
            <Route path="/callback" element={<SpotifyCallback />} />
            <Route path="/" element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/projects" element={<PageProjects />} />
            <Route path="/projects/:id" element={<PageSingleProject />} />

          </Routes>
        </div>

        <Footer />
      </div>
      <BottomBar />
    </BrowserRouter>
  );
}

export default AppRouter;
