

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Palette, Circle, CircleDot } from "lucide-react";

function ColorSwitcher() {
  const { theme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (e, newTheme) => {
    e.preventDefault();
    changeTheme(newTheme);
  };

  const themes = [
    {
      name: "Sun",
      key: "tangerine",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 37" width="40" height="20">
          <path d="M16.2978 0.394884C27.6457 -0.759132..." fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Ocean",
      key: "surfing-sky",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 37" width="40" height="20">
          <path d="M16.2978 0.394884C27.6457 -0.759132..." fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Woods",
      key: "happy-woods",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 37" width="40" height="20">
          <path d="M16.2978 0.394884C27.6457 -0.759132..." fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Earth",
      key: "strawberry-fields",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 37" width="40" height="20">
          <path d="M16.2978 0.394884C27.6457 -0.759132..." fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <div className={`color-switcher ${isOpen ? "open" : ""}`}>
      {/* botão principal do FAB */}
      <button className="fab-icon" onClick={() => setIsOpen(!isOpen)}>
        <Palette size={20} />
      </button>

      {/* dropdown */}
      <div className="theme-list">
        {themes.map((t) => (
          <button
            key={t.key}
            className={`theme-item ${theme === t.key ? "active" : ""}`}
            onClick={(e) => handleThemeChange(e, t.key)}
          >
            {/* RADIO TOGGLE */}
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
