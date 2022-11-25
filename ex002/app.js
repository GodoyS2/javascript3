function PN(){
    let n1 = document.getElementById("numero1").value
    
    if( parseInt(n1) > 0  ){

        document.getElementById("resultado").innerHTML = "Esse número é positivo" + n1      
    }
    else if(parseInt(n1) == 0){
        document.getElementById("resultado").innerHTML = "Esse número é neutro" + n1 

    }
    else if(n1 == 0){
        document.getElementById("resultado").innerHTML = "Esse número é negativo" + n1 
    }
    else{
        document.getElementById("resultado").innerHTML = "Valor Inválido!" 
    }

    document.getElementById("numero1").value = ""
}