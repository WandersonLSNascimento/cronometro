var segundos = 0
var min = 0
var intervalo
var hr = 0
var clicou = false


function iniciar(){
    if(!clicou){
        relogio();
        intervalo= setInterval(relogio,1000);
    }
 
   clicou = true;
}

function pausar(){
    clearInterval(intervalo);
    clicou = false
}

function parar(){
    clearInterval(intervalo);
    segundos=0;
    min=0;
    document.getElementById('relogio').innerText="00:00:00"
    clicou = false

}

function doisDigitos(digito){
    if(digito<10){
        return ("0"+digito)
    }else{
        return(digito)
    }
}


function relogio(){
    segundos++
    if(segundos==60){
        min++
    segundos = 0
        if(min==60){
            min=0
            hr++
    }
    }
    document.getElementById('relogio').innerText=doisDigitos(hr)+":"+doisDigitos(min)+":"+doisDigitos(segundos)
}