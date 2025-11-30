

// import { useState } from "react";
// import { useTheme } from "../context/ThemeContext";
// import { Palette, Circle, CircleDot } from "lucide-react";

// function ColorSwitcher() {
//   const { theme, changeTheme } = useTheme();
//   const [isOpen, setIsOpen] = useState(false);

//   const handleThemeChange = (e, newTheme) => {
//     e.preventDefault();
//     changeTheme(newTheme);
//   };

//   const themes = [
//     {
//       name: "Sun",
//       key: "tangerine",
//       svg: (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 37" width="40" height="20">
//           <path d="M16.2978 0.394884C27.6457 -0.759132..." fill="currentColor" />
//         </svg>
//       ),
//     },
//     {
//       name: "Ocean",
//       key: "surfing-sky",
//       svg: (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 37" width="40" height="20">
//           <path d="M16.2978 0.394884C27.6457 -0.759132..." fill="currentColor" />
//         </svg>
//       ),
//     },
//     {
//       name: "Woods",
//       key: "happy-woods",
//       svg: (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 37" width="40" height="20">
//           <path d="M16.2978 0.394884C27.6457 -0.759132..." fill="currentColor" />
//         </svg>
//       ),
//     },
//     {
//       name: "Earth",
//       key: "strawberry-fields",
//       svg: (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 37" width="40" height="20">
//           <path d="M16.2978 0.394884C27.6457 -0.759132..." fill="currentColor" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <div className={`color-switcher ${isOpen ? "open" : ""}`}>
//       {/* botão principal do FAB */}
//       <button className="fab-icon" onClick={() => setIsOpen(!isOpen)}>
//         <Palette size={20} />
//       </button>

//       {/* dropdown */}
//       <div className="theme-list">
//         {themes.map((t) => (
//           <button
//             key={t.key}
//             className={`theme-item ${theme === t.key ? "active" : ""}`}
//             onClick={(e) => handleThemeChange(e, t.key)}
//           >
//             {/* RADIO TOGGLE */}
//             {theme === t.key ? (
//               <CircleDot className="radio active-radio" size={18} />
//             ) : (
//               <Circle className="radio" size={18} />
//             )}

//             <p>{t.name}</p>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ColorSwitcher;
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Palette, Circle, CircleDot } from "lucide-react";

function ColorSwitcher() {
  const { theme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const switcherRef = useRef(null);

  // FECHAR AO CLICAR FORA
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
    setIsOpen(false); // FECHA AO ESCOLHER TEMA
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
