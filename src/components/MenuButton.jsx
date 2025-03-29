import React from "react";

const MenuButton = ({ toggleMenu }) => (
  <div className="absolute top-4 left-4">
    <button
      id="menuButton"
      className="text-white text-2xl focus:outline-none"
      onClick={toggleMenu}
    >
      <i className="fas fa-bars"></i>
    </button>
  </div>
);

export default MenuButton;