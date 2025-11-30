import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Palette, Circle, CircleDot } from "lucide-react";

function ColorSwitcher() {
  const { theme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const switcherRef = useRef(null);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleThemeChange = (e, newTheme) => {
    e.preventDefault();
    changeTheme(newTheme);
    setIsOpen(false); 
  };

  const themes = [
    { name: "Sun", key: "tangerine" },
    { name: "Ocean", key: "surfing-sky" },
    { name: "Woods", key: "happy-woods" },
    { name: "Earth", key: "strawberry-fields" },
  ];

  return (
    <div
      ref={switcherRef}
      className={`color-switcher ${isOpen ? "open" : ""}`}
    >
      {/* FAB BUTTON */}
      <button className="fab-icon" onClick={() => setIsOpen(!isOpen)}>
        <Palette size={20} />
      </button>

      {/* DROPDOWN */}
      <div className="theme-list">
        {themes.map((t) => (
          <button
            key={t.key}
            className={`theme-item ${theme === t.key ? "active" : ""}`}
            onClick={(e) => handleThemeChange(e, t.key)}
          >
            {theme === t.key ? (
              <CircleDot className="radio active-radio" size={18} />
            ) : (
              <Circle className="radio" size={18} />
            )}
            <p>{t.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorSwitcher;
