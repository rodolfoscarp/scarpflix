import React from "react";
import Logo from "../../assets/images/Logo.png";
import "./menu.css";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="Scarpflix Logo" className="Logo" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Video
      </Button>
    </nav>
  );
};

export default Menu;
