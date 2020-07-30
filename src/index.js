import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Video from "./pages/cadastro/Video";
import Categoria from "./pages/cadastro/Categoria";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={Video} />
      <Route path="/cadastro/categoria" component={Categoria} />
      <Route component={() => <div>Erro 404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
