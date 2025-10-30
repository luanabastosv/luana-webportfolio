import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };
  return (
    <div className="nav-content">
      <nav className={menuOpen ? "menu-open" : ""}>
        <div>
          <button
            className="logo-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <img
              src={
                menuOpen
                  ? "public/assets/images/close.svg"
                  : "public/assets/images/logo-luanabastos.svg"
              }
              alt={menuOpen ? "Close menu" : "Luana Bastos logo"}
            />
          </button>
        </div>
        <ul>
          <li>
            <a href="/" onClick={(e) => handleNavClick(e, "/")}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={(e) => handleNavClick(e, "/about")}>
              About
            </a>
          </li>
          <li>
            <a href="/projects" onClick={(e) => handleNavClick(e, "/projects")}>
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
