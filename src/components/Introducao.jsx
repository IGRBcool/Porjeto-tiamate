import img from "../assets/img.png"


const Introducao = () => {
    return (

        <div className=" flex justify-between items-center bg-marron-white">

            <img src={img} alt="" />
            <div>
                <h6 className="text-marron-black-2 text-lg mb-2.5">Para os amantes de café</h6>
                <h2 className="text-marron-medio text-[50px] font-bold leading-15 mb-7"> Bem-vindo<br />Tiamate Coffe</h2>
                <p> A Tiamate te Coffee traduz de maneira clara e objetiva o verdadeiro sabor do café e o seu espírito inovador. Visamos fazer parte da vida das pessoas e diferentes culturas, isso é o que nos motiva
                    a oferecer o café mais gostoso. Por isso, selecionamos as melhores plantações, os grãos, os blends e as pessoas que
                    vão colocar a mão na massa para fazer esse delicioso café.</p>
                <br />
                <p>Pensamos em fazer os seus momentos mais felizes, seja no café da manhã ou em uma reunião. Individualmente ou entre amigos. À Tiamate Coffee investe em um conceito atual que transmite
                    as pessoas uma sensação de bem estar. Enquanto nosso café aproxima as pessoas, nossos serviços de Wifi gratuito as mantém conectadas. Descubra como navegar na internet enquanto você saboreia um Tiamate.</p>


            </div>

        </div>
    );
}

export default Introducao;