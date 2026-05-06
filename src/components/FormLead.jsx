import { BiCoffee, BiCoffeeTogo, BiEnvelope, BiSolidCoffee, BiSolidCoffeeAlt, BiSolidCoffeeBean, BiSolidCoffeeTogo, BiSolidHome, BiSolidMap, BiSolidPhone, BiUserCircle } from "react-icons/bi";
import img from "../assets/form-bg.png";
import { useEffect, useRef, useState } from "react";
const FormLead = () => {
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const inputNome = useRef(null);
    const inputEmail = useRef(null);
    const inputTelefone = useRef(null);
    const inputEstado = useRef(null);
    const inputCidade = useRef(null);
    const inputComo = useRef(null);
    const form = useRef(null);


    async function buscarEstados() {
        try {
            const request = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
            const resposta = await request.json();
            setEstados(resposta);
        } catch (error) {
            alert(error.message)
        }
    }


    async function buscarCidades(estadoId) {
        try {
            const request = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
            const resposta = await request.json();
            setCidades(resposta);
        } catch (error) {
            alert(error.message)
        }
    }

    function enviar() {
        event.preventDefault();
        const lead = {
           nome : inputNome.current.value,
           email : inputEmail.current.value,
           telefone : inputTelefone.current.value,
           estado : inputEstado.current.value,
           cidade : inputCidade.current.value,
           como : inputComo.current.value,
        }
        form.current.reset();
        console.log(lead);
        
    }


    useEffect(() => {
        buscarEstados();
    }, [])

    return (
        <div className=" bg-marron-black-2 flex justify-between items-center">
            <div className="pl-33.75 pr-17.5 ">
                <h6 className=" text-marron-white-2 text-lg">Entre em contato</h6>
                <h2 className="text-marron-white text-[50px] leading-15 font-bold">Abra sua franquia</h2>
                <p className="text-marron-white-2 mb-4">Preencha o formulário abaixo que entraremos em contato com você o mais rápido possível.</p>
                <form ref={form} onSubmit={enviar}>
                    <div className="bg-marron-white flex items-center rounded pl-4 gap-4 mb-3 font-black ">
                        <BiUserCircle className="w-10 h-10 bg-marron-medio fill-marron-black-2 rounded-full p-2" />
                        <input ref={inputNome} type="text" placeholder="Nome e sobrenome" className="h-15 flex-1 bg-transparent focus:outline-0" />
                    </div>
                    <div className="bg-marron-white flex items-center rounded pl-4 gap-4 mb-3 font-black ">
                        <BiEnvelope className="w-10 h-10 bg-marron-medio fill-marron-black-2 rounded-full p-2" />
                        <input ref={inputEmail} type="text" placeholder="Exemplo de e-mail@exemplo" className="h-15 flex-1 bg-transparent focus:outline-0" />
                    </div>
                    <div className="bg-marron-white flex items-center rounded pl-4 gap-4 mb-3 font-black ">
                        <BiSolidPhone className="w-10 h-10 bg-marron-medio fill-marron-black-2 rounded-full p-2" />
                        <input ref={inputTelefone} type="text" placeholder="Telefone com DDD" className="h-15 flex-1 bg-transparent focus:outline-0" />
                    </div>

                    <div className="flex gap-4 *:flex-1">
                        <div className=" bg-marron-white flex items-center rounded pl-4 gap-4 mb-3 font-black pr-4">
                            <BiSolidMap className="w-10 h-10 bg-marron-medio fill-marron-black-2 rounded-full p-2" />
                            <select ref={inputEstado} className="h-15 flex-1 gb-transparent focus:outline-0"
                                onChange={(e) => buscarCidades(e.target.value)}>
                                <option disabled selected>UF</option>
                                {
                                    (estados || []).map(estado => (
                                        <option key={`e-${estado.id}`} value={estado.id}>{estado.nome}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="bg-marron-white flex items-center rounded pl-4 gap-4 mb-3 font-black pr-4 ">
                            <BiSolidHome className="w-10 h-10 bg-marron-medio fill-marron-black-2 rounded-full p-2" />
                            <select ref={inputCidade} className="h-15 flex-1 gb-transparent focus:outline-0"
                                disabled={cidades.length == 0}>
                                <option disabled selected>Cidade</option>
                                {
                                    (cidades || []).map(cidade => (
                                        <option key={`c-${cidade.id}`} value={cidade.id}>{cidade.nome}</option>
                                    ))

                                }
                            </select>
                        </div>


                    </div>
                    <div className="bg-marron-white flex items-center rounded pl-4 gap-4 font-black mb-4 pr-4">
                        <BiCoffee className="w-10 h-10 bg-marron-medio fill-marron-black-2 rounded-full p-2" />
                        <select ref={inputComo} className="h-15 flex-1 gb-transparent focus:outline-0">
                            <option disabled selected>Como conheceu a Tiamate?</option>
                            <option>Facebook</option>
                            <option>Instagram</option>
                            <option>Google</option>
                            <option>Indicação</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full h-15 bg-marron-white-2 text-marron-black font-semibold hover:bg-gold rounded duration-150">Enviar cadastro</button>
                </form>

            </div>

            <div>
                <img src={img} alt="" />
            </div>
        </div >
    );
}

export default FormLead