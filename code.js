const entr = document.querySelector("#input")
entr.addEventListener("keypress", function(e){
    if (!checkInput(e)){
        e.preventDefault();

    }
});
function checkInput(e){
    const char = String.fromCharCode(e.keyCode);
    const pattern= '[0-9]';
    if (char.match(pattern)){
        return true;
    }

};
// // //------------------------------------------
function pressOk(){
let entrada = document.querySelector('._input').value
const result = entrada.match(/\d/g)
const result2 = result.toString()
const result3 = result2.replace(/[,]/g, '')
let valor = parseInt(result3);
binary_string ="\n \n \n" + valor.toString(2);
octal_string = "\n \n \n" + valor.toString(8);
hexadecimal_string = "\n \n \n" + valor.toString(16);
//--------------------------------------------
let saida1= document.querySelector('#filho1')
saida1.innerText = binary_string;
let saida2= document.querySelector('#filho2')
saida2.innerText = octal_string;
let saida3= document.querySelector('#filho3')
saida3.innerText = hexadecimal_string;
//-------------------------------------------
const card = document.querySelector("#card1")
card.classList.toggle("flip1", false)
const card2 = document.querySelector("#card2")
card2.classList.toggle("flip2", false)
const card3 = document.querySelector("#card3")
card3.classList.toggle("flip3", false)
//--------------------------------------------
const carde1 = document.querySelector('[data-anime]')
carde1.classList.toggle("animate", true)
const carde2 = document.querySelector('[data-animes]')
carde2.classList.toggle("animates", true)
const carde3 = document.querySelector('[data-animesi]')
carde3.classList.toggle("animatesi", true)
}

function offCards(){
const card = document.querySelector("#card1")
card.classList.toggle("flip1", true)
const card2 = document.querySelector("#card2")
card2.classList.toggle("flip2", true)
const card3 = document.querySelector("#card3")
card3.classList.toggle("flip3", true)
//---------------------------------------------
const carde1 = document.querySelector('[data-anime]')
carde1.classList.toggle("animate", false)
const carde2 = document.querySelector('[data-animes]')
carde2.classList.toggle("animates", false)
const carde3 = document.querySelector('[data-animesi]')
carde3.classList.toggle("animatesi", false)
}

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i )
    })
}
const titulo = document.querySelector('#escrita')
typeWriter(titulo)


const fundo = document.querySelector('.pagina-fundo')
const tenta= document.querySelector(".marcar")
fundo.addEventListener('click', ()=>{ 
     tenta.setAttribute("checked", "checked")
    //  return tenta
    })
