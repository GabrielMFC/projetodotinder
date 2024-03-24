import React, {useState} from "react"
import "./index.css"
import CadastrarUsuario from "./services/Post"

// "email":"admin@admin.com",
// "senha":"123456"
// http://localhost:3400/login

function TelaDeLogin() {
    const definaOSparametros = () => {
        if(!email || !senha){
            alert("preencha")
            return
        }
        CadastrarUsuario(email, senha)
    }

    const [mostrar, setMostrar] = useState(true)

    const [email, setEmail] = useState("")
    const CapturarEmail = (event) => {
        setEmail(event.target.value)
    }
    const [senha, setSenha] = useState("")
    const CapturarSenha = (event) => {
        setSenha(event.target.value)
    }
    return(
        <div className="ativado">
        <input onChange={CapturarEmail} valueemail={email} type="email" placeholder="Digite o email..."></input>
        <input onChange={CapturarSenha} valuesenha={senha} type="password" placeholder="Digite a senha..."></input>
        <button onClick={() => setMostrar(!mostrar)}>Clique</button>
        </div>
    )
}

export default TelaDeLogin