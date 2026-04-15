
import logo from "../assets/logo.png";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";
import logoGracon from "../assets/logoGracon.png"

const Footer = () => {
    return (
        <div className="bg-marron-black text-marron-white px-33.75 py-15">
            <div className="flex justify-between border-b border-marron-white-2 pb-12.5">
                <img src={logo} alt="" />
                <nav className=" flex items-center gap-11.5  *:hover:text-yellow *:duration-200">
                    <a href="/Home"> Home </a>
                    <a href="/nosso-café">Nosso café</a>
                    <a href="/franquia">Franquia</a>
                    <a href="/contato">Contato</a>
                    <a href="/cardapio">Cardápio</a>

                </nav>
            </div>
            <div className="flex justify-between items-center pt-10">
                <div className="flex items-center">
                    <h6>Curta e <br />compartilhe</h6>
                    <div className="flex gap-4 ml-10 *:w-10 *:h-10 *:rounded-full *:bg-marron-white-2 *:flex *:justify-center *:items-center *:text-2xl *:text-marron-black ">
                        <a href=""><BiLogoInstagram /></a>
                        <a href=""><BiLogoFacebook /></a>
                        <a href=""><BiLogoYoutube /></a>
                        <a href=""><BiLogoLinkedin /></a>
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <h6 className="text-marron-medio" >© 2021 Tiamate - Todos os Direitos Reservados</h6>
                    <img src={logoGracon} alt="" />
                </div>

            </div>

        </div>
    );
}

export default Footer;