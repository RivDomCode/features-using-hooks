import React, { useState } from "react";
import { Characters } from "./components/Characters";

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${isActive ? "light app" : "dark app"}`}>
      <header className="header">
        <h1 className="header__title">HooksApp</h1>
        <div className="btn__container">
          <button type="button" className="btn" onClick={handleClick}>
            {isActive ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </header>
      <Characters />
    </div>
  );
}

export default App;
