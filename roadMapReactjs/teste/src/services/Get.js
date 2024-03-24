let token = localStorage.getItem("token")
let url = "http://localhost:3400/produtos"

function LerOsDados() {
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: token
        }
    })
    .then(response => response.json())
    .then((response) => {
        console.log(response[0].nome)
    })
}
export default LerOsDados