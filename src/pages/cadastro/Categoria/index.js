import React, { useState } from "react";
import Scaffold from "../../../components/Scaffold";
import { Link } from "react-router-dom";
import FormField from "../../../components/FomField";
import Button from "../../../components/Button";

const Video = (props) => {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000000",
  };

  const [valores, setValores] = useState(valoresIniciais);

  const setValor = (chave, valor) => {
    setValores({ ...valores, [chave]: valor });
  };

  const handleChange = (e) => {
    setValor(e.target.getAttribute("name"), e.target.value);
  };

  return (
    <Scaffold>
      <h1>Cadastro de Categoria: {valores.nome}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCategorias([...categorias, valores]);
          setValores(valoresIniciais);
        }}
      >
        <FormField
          value={valores.nome}
          handleChange={handleChange}
          name="nome"
          type="text"
          label="Nome da Categoria"
        />
        <FormField
          value={valores.descricao}
          handleChange={handleChange}
          name="descricao"
          type="textarea"
          label="Descrição"
        />
        <FormField
          value={valores.cor}
          handleChange={handleChange}
          name="cor"
          type="color"
          label="Cor"
        />
        <div>
          <Button>Cadastrar</Button>
        </div>
      </form>
      <ul>
        {categorias.map((e, index) => {
          return <li key={index}>{JSON.stringify(e)}</li>;
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </Scaffold>
  );
};

export default Video;
