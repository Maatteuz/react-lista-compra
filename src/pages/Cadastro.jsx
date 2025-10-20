import { useRef, useState } from "react";
import { BiArrowBack, BiMinus, BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router";

const Cadastro = () => {
    const navigate = useNavigate();
    const nomeRef = useRef();
    const [produtos, setProdutos]= useState([]);
    const [qtd, setQtd] = useState(1);

    
    return ( 
        <>
            <div onClick={() => navigate("/")} className="p-4 gap-4 flex items-center mb-4 font-bold">
                <BiArrowBack /> Voltar
            </div>
            <div className="p-4">
                <div className="p-3 shadow">
                <input  
                        ref={nomeRef}
                        type="text" 
                        placeholder="Digite o nome do produto" 
                        className="w-full h-[40px] mb-3 pl-3"/>
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-3 items-center">
                            <BiMinus />
                            {qtd}
                            <BiPlus />
                        </div>
                        <button className="h-[40px] bg-[#FF9D00] rounded font-bold flex-1">Adicionar</button>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="font-bold">Produtos na Lista</h2>

                </div>
            </div>
        </>
     );
}
 
export default Cadastro;