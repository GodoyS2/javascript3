function VerificarPeriodo(){
    let periodo = document.getElementById("periodo").value
    if(periodo == "d"){
        document.getElementById("resultado").innerHTML = "Dia"
    }
    else if (periodo == "n"){
        document.getElementById("resultado").innerHTML = "Noite"
    }
    else{
        document.getElementById("resultado").innerHTML = "Período Inválido"
    }
}