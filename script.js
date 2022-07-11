//variáveis
let heigthValue = document.querySelector(".heigthvalue")
let weightValue = document.querySelector(".weightvalue")
let trainValue = document.querySelector(".trainvalue")
let bonusvalue = document.querySelector(".bonusvalue")
let button = document.querySelector(".button")

let paResult = document.querySelector(".paresult")
let kgResult = document.querySelector(".kgresult")
let fbResult = document.querySelector(".fbresult")
let fpResult = document.querySelector(".fpresult")
let fcResult = document.querySelector(".fcresult")

let bonus
let bonuschi

//funções

function catchValue (element){
    if(element.value === "Nynfes"){
        bonus = 7/100
    }else if(element.value === "Sirenes"){
        bonus = 7.5/100
    }else if(element.value === "Youmanity"){
        bonus = 8/100
    }else if(element.value === "Halfentry"){
        bonus = 8.5/100
    }else if(element.value === "Vulcanossauros"){
        bonus = 12/100
    }else if(element.value === "Mestiços"){
        bonus = 8/100
    }else if(element.value === "YoumanityB"){
        bonus = 10/100
    }else if(element.value === "Tengoku"){
        bonus = 10/100
    }
}

function catchValueChi (element){
    if(element.value === "na"){
        bonuschi = 1/100
    }else if(element.value === "Corporal"){
        bonuschi = 5/100
    }else if(element.value === "Infusão"){
        bonuschi = 10/100
    }else if(element.value === "Redenção"){
        bonuschi = 20/100
    }else if(element.value === "Rei"){
        bonuschi = 30/100
    }
}



function catchInfos (){
    
    /*pa*/
    let heighint = parseInt(heigthValue.value);
    let weight = parseInt(weightValue.value);
    let soma = (heighint+ weight)/5;
    paResult.innerHTML = soma;

    /*dias de treino*/
    let trainint = parseInt(trainValue.value);
    let kgextra = trainint * 1.5
    kgResult.innerHTML = kgextra

    /*fb*/
    let fbbruto = ((soma*2)+kgextra)
    let fbbonus = fbbruto+(fbbruto*bonus)+(fbbruto*bonuschi)
    let fbfinal = parseInt(fbbonus)
    fbResult.innerHTML = fbfinal

    /*fp*/
    let fpbruto = ((soma*7)+kgextra)
    let fpbonus = fpbruto+(fpbruto*bonus)+(fpbruto*bonuschi)
    let fpfinal = parseInt(fpbonus)
    fpResult.innerHTML = fpfinal

    /*fc*/
    let fcbruto = fbfinal + fpfinal;
    fcResult.innerHTML = fcbruto
}


//calls:

function callFunctionsButton(){
    catchInfos ()
}

button.addEventListener("click", callFunctionsButton)