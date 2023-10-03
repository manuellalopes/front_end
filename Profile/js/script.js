/* MUDANÇA DE DARK PARA LIGHT */

function mode() {

    const html = document.documentElement
    html.classList.toggle("claro")

    const img = document.querySelector(".profile img")

    if (html.classList.contains("claro")) {
        img.setAttribute("src", "././img/logo_light.svg")
        document.body.style.backgroundImage="url('./img/bg_light2.svg')"
    } else {
        img.setAttribute("src", "././img/logo_dark.svg")
        document.body.style.backgroundImage="url('./img/bg_dark.svg')"
    }
    console.log(html)
}

/* MOVIMENTAÇÃO DO BOTÃO */

const btn = document.getElementById('btn');
let mover = false;

btn.addEventListener("click", () => {
    if (mover) {
        btn.style.left = "0";
    } else {
        btn.style.left = "55px";
    }
    mover = !mover;
} );