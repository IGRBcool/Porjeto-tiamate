import { BiArrowBack, BiArrowToRight, BiLeftArrow, BiRightArrow } from "react-icons/bi"
import tiamatino1 from "../assets/tiamatino1.png"
import tiamatino2 from "../assets/tiamatino2.png"
import tiamatino3 from "../assets/tiamatino3.png"
import tiamatino4 from "../assets/tiamatino4.png"
import { useState } from "react"

const Cardápio = () => {
    const [click,setClick] = useState (0)

    function proximo(){
     if(click<5){
        setClick (click +1);
      }
    
    }

    
    function anterior (){
        if(click >0){
            setClick (click - 1);
        }
    }


        return (

        <div className="pb-33.75 bg-marron-white">
            <h6 className="text-center text-marron-black-2 text-lg ">Confira nosso</h6>
            <h6 className="text-center text-marron-medio text-[50px] leading-15 font-bold mb-15"> Cardápio</h6>
            <div className="flex items-center justify-center gap-4 selection:bg-transparent">
                <BiArrowBack onClick={anterior} className="text-3xl cursor-pointer hover:bg-marron-medio" />
                <div className="w-217.5 overflow-hidden">
                    <div style={{left: `-${290 * click}px`}} className="w-290 flex *:w-72.5 relative left-5 duration-200">
                        <img src={tiamatino1} alt="" />
                        <img src={tiamatino2} alt="" />
                        <img src={tiamatino3} alt="" />
                        <img src={tiamatino4} alt="" />
                        <img src={tiamatino1} alt="" />
                        <img src={tiamatino2} alt="" />
                        <img src={tiamatino3} alt="" />
                        <img src={tiamatino4} alt="" />
                    </div>
                </div>
                <BiArrowBack onClick={proximo} className="text-3xl cursor-pointer hover:bg-marron-medio rotate-y-180" />
                
            </div>
            <div className="flex justify-center ">
            <a className="leading-15 rounded-lg bg-marron-white-2 px-25 text-marron-black-2 font-bold ">Ver mais</a>
            <link    />
            </div>
        </div>

    );
}

export default Cardápio;