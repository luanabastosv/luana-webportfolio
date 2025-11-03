import { useState } from "react";

function ColorSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(null);

  const handleThemeChange = (e, theme) => {
    e.preventDefault();
    document.documentElement.setAttribute("data-theme", theme);
    setActiveTheme(theme);
  };

  const themes = [
    {
      name: "Tangerine",
      key: "tangerine",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 37" className="icon">
          <path
            d="M16.2978 0.394884C27.6457 -0.759132 40.4754 1.0621 51.9834 0.282546C74.2736 2.4442 74.8596 33.7558 52.6068 36.6766C41.0852 36.1149 28.62 37.5719 17.2074 36.7345C-5.57001 35.0596 -5.59386 2.62122 16.2978 0.394884ZM49.6838 3.80247C28.3679 5.6271 34.517 38.8451 55.3594 32.6188C71.7663 27.7168 67.1774 2.30803 49.6838 3.80247Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Surfing Sky",
      key: "surfing-sky",
      svg: (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 37" className="icon">
          <path
            d="M16.2978 0.394884C27.6457 -0.759132 40.4754 1.0621 51.9834 0.282546C74.2736 2.4442 74.8596 33.7558 52.6068 36.6766C41.0852 36.1149 28.62 37.5719 17.2074 36.7345C-5.57001 35.0596 -5.59386 2.62122 16.2978 0.394884ZM49.6838 3.80247C28.3679 5.6271 34.517 38.8451 55.3594 32.6188C71.7663 27.7168 67.1774 2.30803 49.6838 3.80247Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Happy Woods",
      key: "happy-woods",
      svg: (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 37" className="icon">
          <path
            d="M16.2978 0.394884C27.6457 -0.759132 40.4754 1.0621 51.9834 0.282546C74.2736 2.4442 74.8596 33.7558 52.6068 36.6766C41.0852 36.1149 28.62 37.5719 17.2074 36.7345C-5.57001 35.0596 -5.59386 2.62122 16.2978 0.394884ZM49.6838 3.80247C28.3679 5.6271 34.517 38.8451 55.3594 32.6188C71.7663 27.7168 67.1774 2.30803 49.6838 3.80247Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Strawberry Fields",
      key: "strawberry-fields",
      svg: (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 37" className="icon">
          <path
            d="M16.2978 0.394884C27.6457 -0.759132 40.4754 1.0621 51.9834 0.282546C74.2736 2.4442 74.8596 33.7558 52.6068 36.6766C41.0852 36.1149 28.62 37.5719 17.2074 36.7345C-5.57001 35.0596 -5.59386 2.62122 16.2978 0.394884ZM49.6838 3.80247C28.3679 5.6271 34.517 38.8451 55.3594 32.6188C71.7663 27.7168 67.1774 2.30803 49.6838 3.80247Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className={`color-switcher ${isOpen ? "active" : ""}`}>
      <div className="color-button" onClick={() => setIsOpen(!isOpen)}>
        <p>Choose ur vibe!</p>
        <p>{isOpen ? ">" : "<"}</p>
      </div>
      <div className="color-options">
        {themes.map((theme) => (
          <div key={theme.key}>
            <p>{theme.name}</p>
            <a
              href=""
              onClick={(e) => handleThemeChange(e, theme.key)}
              className={activeTheme === theme.key ? "active" : "inactive"}
            >
              {theme.svg}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorSwitcher;
