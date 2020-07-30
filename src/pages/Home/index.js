import React from "react";
import Menu from "../../components/Menu";
import BannerMain from "../../components/BannerMain";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import dados from "../../data/dados_iniciais.json";

const Home = (props) => {
  return (
    <div>
      <div style={{ backgroundColor: "rgba(20,20,20,1)" }}>
        <Menu />
        <BannerMain
          videoTitle="Conheça o canal da Alura!"
          videoDescription="Acompanhe conteúdos de Tecnologia, Design e Negócios digitais tanto em aulas curtas e práticas, 
        quanto em webséries, como o Hipsters Ponto Tube. Conheça a Alura: "
          url="https://www.youtube.com/watch?v=k7IPr-rhrPE"
        />
        <Carousel category={dados.categorias[0]} ignoreFirstVideo={false} />
        <Carousel category={dados.categorias[1]} ignoreFirstVideo={false} />
        <Carousel category={dados.categorias[2]} ignoreFirstVideo={false} />
        <Carousel category={dados.categorias[3]} ignoreFirstVideo={false} />
        <Carousel category={dados.categorias[4]} ignoreFirstVideo={false} />
        <Carousel category={dados.categorias[5]} ignoreFirstVideo={false} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
