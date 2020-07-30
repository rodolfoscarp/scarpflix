import React from "react";
import Scaffold from "../../../components/Scaffold";
import { Link } from "react-router-dom";

const Video = (props) => {
  return (
    <Scaffold>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>Cadastrar</button>
      </form>

      <Link to="/">Ir para home</Link>
    </Scaffold>
  );
};

export default Video;
