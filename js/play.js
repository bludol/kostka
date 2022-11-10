// Promměnná zachycuje stav hry
let timer = false;
let turn;
let rounds = [];
let hranice1 = 100;
let hranice2 = 250;
let hranice3 = 500;

const VzhledKostky = {
    vzhledKosticky: 'modra'
}

ButtonSkin.addEventListener('click', function(){
if (modra.checked) {VzhledKostky.vzhledKosticky = 'modra'} 
else if (cerna.checked) {
    if (hranice1 > sum()) {
        alert(`Dosáhni nejdříve součtu hodů ${hranice1}`);
    }else if (hranice1 <= sum()) {VzhledKostky.vzhledKosticky = 'cerna'}}
else if (ruzova.checked) {
    if (hranice2 > sum()) {
        alert(`Dosáhni nejdříve součtu hodů ${hranice2}`);
    }else if (hranice2 <= sum()) {VzhledKostky.vzhledKosticky = 'ruzova'}}
    else if (zelena.checked) {
        if (hranice3 > sum()) {
            alert(`Dosáhni nejdříve součtu hodů ${hranice3}`);
        }else if (hranice3 <= sum()) {VzhledKostky.vzhledKosticky = 'zelena'}}

}) 
    
function OdemknutiVzhledu(){
    if(hranice1 > sum()){
        cerna.disabled
    }
}
    
function animation() {
    turn = Math.ceil(Math.random() * 6);
    dice.src = `img/${VzhledKostky.vzhledKosticky}/kostka${turn}.png`;
}

function sum(){
    let s = 0;
    for(i=0;i < rounds.length; i++){
        s+= rounds[i];
    }
    return s;
}

function stats() {
    let results = `<p>aktuální hod: ${turn}</p>`;
    //results += `<p>přehled hodů: ${rounds}</p>`;
    results += `<p>počet hodů: ${rounds.length}</p>`;
    results += `<p>součet hodů: ${sum()}</p>`;
    results += `<p>průměr hodů: ${sum()/rounds.length}</p>`;
    
    return results;
}

play.addEventListener('click', function() {
    if (!timer) {
        
        play.innerText = 'STOP';
        timer = setInterval(animation, 40);
    } else {
        play.innerText = 'HREJ';
        clearInterval(timer);
        timer = false;
        rounds.push(turn);
        result.innerHTML= stats();
    }
})
if (modra.checked) {vzhled = 'modra'} else {vzhled = 'cerna'};
