const botaoSubmit = document.getElementById("btn")
botaoSubmit.addEventListener("click", () => {
    const trocarLayout = document.querySelector(".none")
    const divPrincipal = document.getElementById("principal")
    trocarLayout.classList.remove("none")
    divPrincipal.classList.add("none")
})

const notaEscolhida = document.querySelectorAll(".item")
function notaAvaliada(){
    notaEscolhida.forEach((nota) => {
        nota.classList.remove("nota-selecionada")
    })
    this.classList.add("nota-selecionada")
}

notaEscolhida.forEach((nota) => {
    nota.addEventListener("click", notaAvaliada)
})

const posicaoDaNota = document.querySelectorAll(".item")
posicaoDaNota.forEach((nota) => {
    nota.addEventListener("click", () => {
        let posicao = nota.textContent
        let notaEnviada = document.getElementById("nota-dada")
        notaEnviada.innerHTML = posicao        
    })
})
