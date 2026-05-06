import Banner from "../components/Banner";
import banner from "../assets/banner.png";
import banner2 from "../assets/banner-2.png";
import Introducao from "../components/Introducao";
import Valores from "../components/Valores";
import Galeria from "../components/Galeria";
import Cardápio from "../components/Cardápio";
import FormLead from "../components/FormLead";

const Home = () => {
  return (
    <>

      <Banner

        texto="Um café quentinho aqui na Tiamate muda o dia"
        imagem={banner}
        links
      />
      <Introducao />

      <Valores

      />
      <Banner

        texto={"Café Autêntico Chegou nosso café! Direto da fazenda."}
        imagem={banner2}
      />
      <Galeria

      />

      <Cardápio />
      <FormLead />
    </>
  );
}

export default Home;
