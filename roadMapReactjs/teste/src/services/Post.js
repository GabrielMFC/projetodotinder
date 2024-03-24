//Cadastrar usuario

let url = "http://localhost:3400/login"
function CadastrarUsuario(email, senha) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email: email, senha: senha})
    })
    .then(response => response.json())
    .then((response) => {
        localStorage.setItem("token", response.token)
    })
}
export default CadastrarUsuario