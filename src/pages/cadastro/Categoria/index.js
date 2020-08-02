import React, { useState, useEffect } from "react";
import Scaffold from "../../../components/Scaffold";
import { Link } from "react-router-dom";
import FormField from "../../../components/FomField";
import Button from "../../../components/Button";
import firebase from "../../../libs/firebase";

const Video = (props) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const database = firebase.database();
    const categoriasRef = database.ref(`categorias/`);
    categoriasRef
      .once("value")
      .then((snapshot) => {
        setCategorias(snapshot.val());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          console.log("clicou");
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
      {categorias.length === 0 && <div>Carregando...</div>}
      <ul>
        {categorias.map((e, index) => {
          return <li key={index}>{e.titulo}</li>;
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </Scaffold>
  );
};

export default Video;
