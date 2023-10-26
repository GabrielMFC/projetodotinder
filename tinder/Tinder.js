
const divs = document.getElementById("curiosidade");

            const cor = ["blue", "red", "gray", "black", "yellow", "green"];
            const corborda = ["green", "gray", "red", "yelllow", "black", "blue"];
            let i = 0;
            let c = 0;
            function mudarcor() {
                divs.style.backgroundColor = cor[i];
                i = (i + 1) % cor.length;    
            };
            setInterval(mudarcor, 500);

            const enviar = document.getElementById("enviar1");
            let usuario = 0
            const input = document.getElementById("botaodedigitar1")
            enviar.addEventListener("click", nome);
            function nome(){
                usuario = input.value;
               localStorage.setItem('nome', usuario)
            };

            const enviar2 = document.getElementById("enviar2");
            let generoz = 0
            const input2 = document.getElementById("botaodedigitar2");
            enviar2.addEventListener("click", genero);
            function genero(){
               let generoz = input2.value;
               localStorage.setItem('genero', generoz)
            };

            const enviar3 = document.getElementById("enviar3");
            let fetiches = 0
            const input3 = document.getElementById("botaodedigitar3");
            enviar3.addEventListener("click", fetiche);
            function fetiche(){
               let fetiches = input3.value;
               localStorage.setItem('fetiche', fetiches)
            };

            const enviar4 = document.getElementById("enviar4");
            let hoby = 0
            const input4 = document.getElementById("botaodedigitar4");
            enviar4.addEventListener("click", hobby);
            function hobby(){
               let hoby = input4.value;
               localStorage.setItem('hobby', hoby)
            };
            /*
            console.log( 43 + 199 + 209 + 31 + 150 + 60 + 65 + 89 + 48 )
            894 linhas de código*/