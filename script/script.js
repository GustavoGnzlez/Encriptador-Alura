let ingresarTexto = document.getElementById("ingresarTexto");
let btnEncriptar = document.getElementById("btnEncriptar");
let btnDesencriptar = document.getElementById("btnDesencriptar");
let btnCopiar = document.getElementById("btnCopiar");
let textoFinal = document.getElementById("textoFinal");
let munheco = document.getElementById("munheco");
let rightInfo = document.getElementById("rightInfo");
let right = document.getElementById("right");


let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
];

const replace = (newValue) => {
    textoFinal.innerHTML = newValue;
    munheco.classList.add("ocultar");
    rightInfo.classList.add("ocultar");
    ingresarTexto.value = "";
    btnCopiar.style.display = "block";
    right.classList.add("ajustar");
    textoFinal.classList.add("ajustar");
    munheco.classList.add("ocultar");
}

const reset = () => {
    textoFinal.innerHTML = "";
    munheco.classList.remove("ocultar");
    rightInfo.classList.remove("ocultar");
    ingresarTexto.focus();
    btnCopiar.style.display = "none";
    textoFinal.classList.remove("ajustar");
}

btnEncriptar.addEventListener("click", () => {
    const texto = ingresarTexto.value.toLowerCase();

    if (texto != "") {

        function encriptar(newText) {
            for (let i = 0; i < reemplazar.length; i++) {
                if (newText.includes(reemplazar[i][0])) {
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return newText;
        };
        replace(encriptar(texto));
    }else {
        alert("Ingrese algún texto para encriptar");
        reset();
    }    
});

btnDesencriptar.addEventListener("click", () => {
    const texto = ingresarTexto.value.toLowerCase();

    if (texto != "") {

        function desencriptar(newText) {
            for(let i = 0; i < reemplazar.length; i++) {
                if (newText.includes(reemplazar[i][1])) {
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                }
            }
            return newText;
        }
        replace(desencriptar(texto));
    }else {
        alert("Ingrese algún texto para desencriptar");
        reset();
    }
})

btnCopiar.addEventListener("click", () => {
    let texto = textoFinal;
    texto.select();
    document.execCommand('copy');
    alert("Texto copiado");
    reset();
})