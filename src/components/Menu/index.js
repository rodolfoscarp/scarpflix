import React from "react";
import Logo from "../../assets/images/Logo.png";
import "./menu.css";
import Button from "../../components/Button";

const Menu = (props) => {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="Scarpflix Logo" className="Logo" />
      </a>
      <Button href="/" className="ButtonLink">
        Novo Video
      </Button>
    </nav>
  );
};

export default Menu;
