import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ColorSwitcher from "./ColorSwitcher";

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
        <section className="left-sec">
          <div>
            <button className="logo-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 119">
                <path
                  d="M107.1,59.6c0-7.2,6.7-12.6,6.8-19.7-4.9-2-13.5-6-16.4-10.4-2.5-3.8-4.6-17.7-5.6-18.3h0c-2.3-1.5-9.6,1.2-12.8,1.3-12.6.3-17.8-12.5-21.9-12.5s-11.4,10.5-17,11.8c-5.1,1.2-17.2-2.3-19.1-.6-.8.6-1.9,14.1-4.2,18C13.6,34.3.1,38.5,0,41.8c0,4.8,5.7,10.7,5.7,17.8S-.8,74.4,0,78.6c.2,1,13.8,7.7,16.4,11.4,2.9,4.1,3.4,17.3,4.4,18.2,1.8,1.5,14.4-2.1,19.5-.9,5,1.2,14.1,12.1,16.5,11.8,4.3-.4,10-10.4,17-11.8,5.5-1.1,15,2.8,18.3.5,1.9-1.4,2-14.9,6.1-19.9,3.2-3.9,10.9-6.5,15.7-8.3,1.2-1.6-6.8-14.9-6.8-19.8ZM64.8,82.3c-.4.3-1.3.4-2.4.4h-25.4v-43.7h16v41.7h5.9c1.3,0,2.4-.1,3.4-.4.9-.3,1.5-.4,1.6-.4h0c1.1,0,1.7.5,1.7,1.4s-.2.7-.7,1ZM78.7,76.8c-2.2,2.5-4.6,4.2-8.5,5.1-.5.1-.9,0-1.4-.6-.1-.1-.3-.6-.3-.8,0-.4.3-1.1.7-1.2.6-.2,1.2-.2,1.7-.4,2.7-.9,4.6-2.2,6.2-4.2,1.5-1.9,2.2-3.9,2.2-6s-.3-3.9-.9-5.3c-.6-1.4-1.5-2.7-2.7-3.7-2.4-2.1-5.8-3.1-10.1-3.1h0l-2.1.2c-.7,0-1.2-.1-1.5-.4-.3-.3-.5-.6-.5-.9,0-.8.6-1.3,1.7-1.3l1.6.2h.5c1.6,0,3.1-.6,4.3-1.8,1.3-1.3,1.9-2.8,1.9-4.7s-1-4-3-5.2c-1-.6-2-1-3-1.1-1-.1-1.8-.2-2.3-.2l-4.7-.2c-.9-.2-1.5-1.1-.4-2,.1-.1.3-.2.5-.2,1.9,0,3.1,0,3.6,0,3.1.1,5.3.5,6.5,1.1,1.3.6,2.3,1.2,3,1.9,1.6,1.6,2.4,3.5,2.4,5.7s-.8,4.1-2.3,5.8c-.1.1-.2.3-.4.4-.5.4-.3,1.2.3,1.3,2.7.7,4.9,2,6.8,3.9,2.4,2.4,3.5,5.2,3.5,8.7s-1.1,6.5-3.3,9.1Z"
                  fill="currentColor"
                />
              </svg>
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
              <a
                href="/projects"
                onClick={(e) => handleNavClick(e, "/projects")}
              >
                <strong>Projects</strong>
              </a>
            </li>
          </ul>
        </section>

        <section className="right-sec">
          <ColorSwitcher />
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                className="icon"
              >
                <line
                  x1="10.9"
                  y1="10"
                  x2="50.1"
                  y2="49.2"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <line
                  x1="50.1"
                  y1="10.8"
                  x2="10.9"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              // Open icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                className="icon"
              >
                <line
                  x1="2.4"
                  y1="29.4"
                  x2="57.8"
                  y2="29.4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <line
                  x1="30.6"
                  y1="2.3"
                  x2="30.6"
                  y2="57.7"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </section>
      </nav>
    </div>
  );
}

export default Nav;
