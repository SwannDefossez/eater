// App.js
"use client";
import React, { useState } from "react";

const ChildComponent1 = ({ isMenuOpen, onMenuToggle }) => {
  return (
    <div>
      <p>Menu 1</p>
      <button onClick={onMenuToggle}>{isMenuOpen ? "Fermer" : "Ouvrir"}</button>
    </div>
  );
};

const ChildComponent2 = ({ isMenuOpen, onMenuToggle }) => {
  return (
    <div>
      <p>Menu 2</p>
      <button onClick={onMenuToggle}>{isMenuOpen ? "Fermer" : "Ouvrir"}</button>
    </div>
  );
};

const ParentComponent = () => {
  const [isMenuOpen1, setMenuOpen1] = useState(false);
  const [isMenuOpen2, setMenuOpen2] = useState(false);

  const handleMenuToggle1 = () => {
    setMenuOpen1(!isMenuOpen1);
    setMenuOpen2(false);
  };

  const handleMenuToggle2 = () => {
    setMenuOpen2(!isMenuOpen2);
    setMenuOpen1(false);
  };

  return (
    <div>
      <ChildComponent1
        isMenuOpen={isMenuOpen1}
        onMenuToggle={handleMenuToggle1}
      />
      <ChildComponent2
        isMenuOpen={isMenuOpen2}
        onMenuToggle={handleMenuToggle2}
      />
    </div>
  );
};

export default ParentComponent;
