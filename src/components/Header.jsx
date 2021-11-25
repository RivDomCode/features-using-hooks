import React, { useState } from "react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <h1 className="header__title">HooksApp</h1>
      <div className="btn__container">
        <button type="button" className="btn" onClick={handleClick}>
          {isActive ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </header>
  );
};
