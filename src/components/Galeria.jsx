import { BiLogoInstagram } from "react-icons/bi"
import galeria1 from "../assets/galeria1.png"
import galeria2 from "../assets/galeria2.png"
import galeria3 from "../assets/galeria3.png"
import galeria4 from "../assets/galeria4.png"
import galeria5 from "../assets/galeria5.png"
import galeria6 from "../assets/galeria6.png"
import instagram from "../assets/instagram.svg"

const Galeria = () => {
    return (
        <div className="p-33.75">
            <div className="flex justify-between items-center">
                <div>
                    <h6 className="text-marron-black-2 text-lg">Para você e seus amigos</h6>
                    <h6 className="text-marron-medio text-[50px] leading-15 font-bold">Ambiente agradável</h6>
                </div>
                <div className="flex items-center gap-4">
                    <h6 className="text-marron-black-2t text-lg">Veja mais</h6>
                    <div className="w-15 h-15 bg-marron-medio hover:bg-marron-black-2 duration-200 rounded-full flex items-center justify-center">
                        <BiLogoInstagram className="text-white text-4xl" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 *:w-full mt-15">
               <img src={galeria1}/>
               <img src={galeria2}/>
               <img src={galeria3}/>
               <img src={galeria4}/>
               <img src={galeria6}/>
               <img src={galeria5}/>
            </div>
            <div className="w-full h-55 bg-marron-white absolute bottom-0 left-0 -z-10" />
        </div>
    );
}

export default Galeria;