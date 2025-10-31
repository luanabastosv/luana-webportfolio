import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../routes/PageHome";
import PageAbout from "../routes/PageAbout";
import PageProjects from "../routes/PageProjects";
import PageContact from "../routes/PageContact";
import Nav from "../components/Nav";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import Footer from "../components/Footer";
import ColorSwitcher from "../components/ColorSwitcher";

function AppRouter() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="wrapper">

        <Nav />
       
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/projects" element={<PageProjects />} />
          <Route path="/contact" element={<PageContact />} />
        </Routes>
        <Footer />
      </div>
      <BottomBar />
    </BrowserRouter>
  );
}

export default AppRouter;
