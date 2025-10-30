import { useState } from "react";
// import "./ColorSwitcher.scss";

function ColorSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`color-switcher ${isOpen ? "active" : ""}`}>
      {/* toggle open/close on click */}
      <div className="color-button" onClick={() => setIsOpen(!isOpen)}>
        <p>Choose ur vibe!</p>
        <p>{isOpen ? ">" : "<"}</p>
      </div>
      <div className="color-options">
        <div>
          <p>Tangerine</p>
          <a href="">
            <img src="public/assets/images/button-color.svg" alt="" />
          </a>
        </div>
        <div>
          <p>Surfing Sky</p>
          <a href="">
            <img src="public/assets/images/button-color.svg" alt="" />
          </a>
        </div>
        <div>
          <p>Happy Woods</p>
          <a href="">
            <img src="public/assets/images/button-color.svg" alt="" />
          </a>
        </div>
        <div>
          <p>Strawberry Fields</p>
          <a href="">
            <img src="public/assets/images/button-color.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ColorSwitcher;
