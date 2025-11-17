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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 69 37"
          className="icon"
        >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 69 37"
          className="icon"
        >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 69 37"
          className="icon"
        >
          <path
            d="M16.2978 0.394884C27.6457 -0.759132 40.4754 1.0621 51.9834 0.282546C74.2736 2.4442 74.8596 33.7558 52.6068 36.6766C41.0852 36.1149 28.62 37.5719 17.2074 36.7345C-5.57001 35.0596 -5.59386 2.62122 16.2978 0.394884ZM49.6838 3.80247C28.3679 5.6271 34.517 38.8451 55.3594 32.6188C71.7663 27.7168 67.1774 2.30803 49.6838 3.80247Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Strawberry",
      key: "strawberry-fields",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 69 37"
          className="icon"
        >
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
        
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 700 698.58"
          >
            <path d="M700,149.41c.12-40.01-15.78-78.41-44.14-106.64-59.69-57.03-153.68-57.03-213.38,0l-107.23,107.27-35.98-35.98c-19.47-19.58-51.12-19.67-70.7-.2-19.58,19.47-19.67,51.12-.2,70.7.07.07.13.13.2.2l35.99,35.99L14.65,470.61C5.27,479.98,0,492.7,0,505.96v142.63c-.02,27.6,22.34,49.98,49.94,50h142.68c13.26,0,25.98-5.27,35.35-14.65l249.86-249.9,35.99,35.99c19.63,19.41,51.29,19.24,70.7-.4,19.26-19.48,19.26-50.83,0-70.31l-35.98-35.98,107.27-107.23c28.39-28.23,44.3-66.65,44.19-106.69ZM171.92,598.58h-71.92v-71.92l235.25-235.2,71.87,71.87-235.2,235.25Z" fill="currentColor" />
          </svg>
        
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
