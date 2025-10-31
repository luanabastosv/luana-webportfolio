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
    // <div className={`color-switcher ${isOpen ? "active" : ""}`}>
    //   {/* toggle open/close on click */}
    //   <div className="color-button" onClick={() => setIsOpen(!isOpen)}>
    //     <p>Choose ur vibe!</p>
    //     <p>{isOpen ? ">" : "<"}</p>
    //   </div>
    //   <div className="color-options">
    //     <div>
    //       <p>Tangerine</p>
    //       <a href="" onClick={(e) => handleThemeChange(e, "tangerine")}>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 69 37"
    //           className="icon"
    //         >
    //           <path
    //             d="M16.2978 0.394884C27.6457 -0.759132 40.4754 1.0621 51.9834 0.282546C74.2736 2.4442 74.8596 33.7558 52.6068 36.6766C41.0852 36.1149 28.62 37.5719 17.2074 36.7345C-5.57001 35.0596 -5.59386 2.62122 16.2978 0.394884ZM49.6838 3.80247C28.3679 5.6271 34.517 38.8451 55.3594 32.6188C71.7663 27.7168 67.1774 2.30803 49.6838 3.80247Z"
    //             fill="currentColor"
    //           />
    //         </svg>
    //       </a>
    //     </div>

    //     <div>
    //       <p>Surfing Sky</p>
    //       <a href="" onClick={(e) => handleThemeChange(e, "surfing-sky")}>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 69 37"
    //           className="icon"
    //         >
    //           <g style={{ opacity: 0.4 }}>
    //             <path
    //               d="M52.7,36.6c-11.3,1.2-24.2-.7-35.7.1C-5.3,34.6-5.9,3.2,16.4.3c11.5.6,24-.9,35.4,0,22.8,1.7,22.8,34.1.9,36.3ZM19.3,33.2c21.3-1.8,15.2-35-5.7-28.8C-2.8,9.3,1.8,34.7,19.3,33.2Z"
    //               fill="currentColor"
    //             />
    //           </g>
    //         </svg>
    //       </a>
    //     </div>

    //     <div>
    //       <p>Happy Woods</p>
    //       <a href="" onClick={(e) => handleThemeChange(e, "happy-woods")}>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 69 37"
    //           className="icon"
    //         >
    //           <g style={{ opacity: 0.4 }}>
    //             <path
    //               d="M52.7,36.6c-11.3,1.2-24.2-.7-35.7.1C-5.3,34.6-5.9,3.2,16.4.3c11.5.6,24-.9,35.4,0,22.8,1.7,22.8,34.1.9,36.3ZM19.3,33.2c21.3-1.8,15.2-35-5.7-28.8C-2.8,9.3,1.8,34.7,19.3,33.2Z"
    //               fill="currentColor"
    //             />
    //           </g>
    //         </svg>
    //       </a>
    //     </div>

    //     <div>
    //       <p>Strawberry Fields</p>
    //       <a href="" onClick={(e) => handleThemeChange(e, "strawberry-fields")}>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 69 37"
    //           className="icon"
    //         >
    //           <g style={{ opacity: 0.4 }}>
    //             <path
    //               d="M52.7,36.6c-11.3,1.2-24.2-.7-35.7.1C-5.3,34.6-5.9,3.2,16.4.3c11.5.6,24-.9,35.4,0,22.8,1.7,22.8,34.1.9,36.3ZM19.3,33.2c21.3-1.8,15.2-35-5.7-28.8C-2.8,9.3,1.8,34.7,19.3,33.2Z"
    //               fill="currentColor"
    //             />
    //           </g>
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ColorSwitcher;
