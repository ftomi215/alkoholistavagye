const igenGomb = document.querySelector('#igen');
const nemGomb = document.querySelector('#nem');

igenGomb.addEventListener('click',igenKattintas);
nemGomb.addEventListener('click',nemKattintas);


function igenKattintas(){
    const output = document.querySelector('#valasz')
    output.innerHTML = "Egészségedre!";
    document.getElementById("kep").src="cheers.png";
}


function nemKattintas(){
    const output = document.querySelector('#valasz')
    output.innerHTML = "DE!";
    document.getElementById("kep").src="liar.png";
}

