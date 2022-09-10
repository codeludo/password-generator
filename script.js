const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passwd1 = document.getElementById('passwd1');
let passwd2 = document.getElementById('passwd2');
const btnGen = document.getElementById('btn-passwd-gen');

btnGen.addEventListener('click', genPassword);

function genPassword(){
    let rnd1;
    let rnd2;
    let passw1 = "";
    let passw2 = "";
    for(let i = 0; i<15; i++){
        rnd1 = Math.floor(Math.random()*91);
        rnd2 = Math.floor(Math.random()*91);

        passw1 += characters[rnd1];
        passw2 += characters[rnd2];

    }
    passwd1.value = passw1;
    passwd2.value = passw2;
}