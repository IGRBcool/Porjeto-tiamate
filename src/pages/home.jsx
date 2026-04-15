import Banner from "../components/Banner";
import banner from "../assets/banner.png";
const Home = () => {
    return ( 
        <>
        
          <Banner 
            texto="Um café quentinho aqui na Tiamate muda o dia"
            imagem={banner}
          />
        
        </>
     );
}
 
export default Home;
