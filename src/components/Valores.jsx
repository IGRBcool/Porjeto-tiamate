import { useState } from "react"
import valores1 from "../assets/valores1.png"
import valores2 from "../assets/valores2.png"
import valores3 from "../assets/valores3.png"
import valores4 from "../assets/valores4.png"
import sair from "../assets/sair.png"
const Valores = () => {
    const [mostrarVideo, setMostrarVideo] = useState(false);
    return (
        <div className="p-33.75 ">
            <div className="flex gap-40">

                <div>

                    <div className=" flex items-center gap-4 mb-5">
                        <img src={valores1} />
                        <h6 className="font-bold text-2xl text-marron-medio">Missão</h6>
                    </div>
                    <p className="text-marron-black-2">

                        Fornecer soluções, produtos e serviços
                        de maneira clara e objetiva
                        construindo relacionamentos duradouros
                        com a comunidade, parceiros, colaboradores
                        e sócios, através da criação de valores.

                    </p>
                </div>
                <div>
                    <div className="flex items-center gap-4 mb-5">
                        <img src={valores2} />
                        <h6 className="font-bold text-2xl text-marron-medio">Visão</h6>
                    </div>
                    <p className="text-marron-black-2">

                        Ser referência em inovação e estimular exponencialmente a nossa gestão de maneira
                        diversificada, próspera e justa. Com devoção e disciplina
                        em todas as nossas operações de negócio

                    </p>
                </div>
                <div>
                    <div className="flex items-center gap-4 mb-5">
                        <img src={valores3} />
                        <h6 className="font-bold text-2xl text-marron-medio">Valores</h6>
                    </div>
                    <p className="text-marron-black-2">

                        Amor ao Trabalho - Organização - Disciplina
                        - Inovação - Busca Contínua Pela Qualidade - Foco no Cliente


                    </p>
                </div>

            </div>
            <div>
                <h2 className="font-bold text-[50px] leading-15 text-marron-medio ">Coisas boas acontecem àqueles <br />
                    que gostam de café</h2>

                <img onClick={() => setMostrarVideo(true)} src={valores4} className="w-full mt-20 rounded-2x1 cursor-pointer" />

            </div>

            <div className={`w-full h-screen bg-black/85 fixed top-0 left-0  justify-center items-center flex ${mostrarVideo ? "opacity-100 visible" : "opacity-0 invisible"} `}>


                <div className="flex justify-around items-center margin-top ">
                    <img onClick={() => setMostrarVideo(false)} src={sair} className="rounded-2xl cursor-pointer fixed top-10 right-10 w-15 h-15" />
                </div>

                {
                    mostrarVideo ? (
                        <iframe width="1100" height="600" src="https://www.youtube.com/embed/RWCP7z8ufiA" title="TIAMATE COFFEE - Seja um Franqueado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    ) : null
                }

            </div>
        </div>


    )
}

export default Valores;