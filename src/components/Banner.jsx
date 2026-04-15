import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";

const Banner = ({ texto, imagem, posicao = "esquerda" }) => {
    return (
        <div className=" h-125 relative">

            <img className="w-full object-contain block"  src={imagem} />

            <div className="absolute left-33.75 top-1/2 -translate-y-1/2">
                <h1 className="font-bold text-[55px] text-marron-white w-137">{texto}</h1>
                <div className="flex gap-4 ml-10 *:w-10 *:h-10 *:rounded-full *:bg-marron-white-2 *:flex *:justify-center *:items-center *:text-2xl *:text-marron-black ">
                   
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
