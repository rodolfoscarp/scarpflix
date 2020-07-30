import React from "react";
import Scaffold from "../../../components/Scaffold";
import { Link } from "react-router-dom";

const Video = (props) => {
  return (
    <Scaffold>
      <h1>Cadastro de Video</h1>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </Scaffold>
  );
};

export default Video;
