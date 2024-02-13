import { useState } from "react";
import "./index.css"
/*
function Componente1() {
const [presuntoePao, paoComPresunto] = useState(true)
const classeDadiv = presuntoePao ? "divComponente1" : ""
const conteudo = presuntoePao ? "" : "remove"
function verificarValordaClass() {
    if(presuntoePao === false){
        return;
    }else{
        setTimeout(() => {window.location.reload()}, 3000)
    }
}
return(
    <div className="centralizarflexi">
        <div className={classeDadiv}>
            <h1 className={conteudo}>Aperta no botãum 😏</h1>
            <button onClick={() => {
                paoComPresunto(!presuntoePao); verificarValordaClass();
                }} className={conteudo}>clique em mim</button>
        </div>
    </div>
)
} */

function Componente1() {
    return(
        <h1>oi</h1>
    )
}
export default Componente1
