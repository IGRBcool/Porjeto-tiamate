import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";
import { IoTerminalOutline } from "react-icons/io5";

const Banner = ({ texto, imagem, aDireita,links}) => {
    return (
        <div className=" h-full relative">

            <img className="w-full h- object-contain"  src={imagem} />
            
            <div className={`absolute -33.75 top-1/2 -translate-y-1/2 ${aDireita? 'right-33.75': 'left-33.75'} `}>
                <h1 className="font-bold text-[55px] text-marron-white w-137">{texto}</h1>
                <div className={`flex gap-4 ml-10 *:w-10 *:h-10 *:rounded-full *:bg-marron-white-2 *:flex *:justify-center *:items-center *:text-2xl *:text-marron-black  ${links? 'true':'hidden'}`}>
                   
                    <a href=""><BiLogoInstagram /></a>
                    <a href=""><BiLogoFacebook /></a>
                    <a href=""><BiLogoYoutube /></a>
                    <a href=""><BiLogoLinkedin /></a>
                </div>
            </div>
        </div>


    );
}

export default Banner
