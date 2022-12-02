function calcular(){
    let n1 =  document.getElementById("n1").value
    let n2 =  document.getElementById("n2").value
     let n3 =  document.getElementById("n3").value

    let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3

    if(media >= 7 && media <= 9){
        document.getElementById("resultado").innerHTML = "Aprovado"
    }
    else if(media <= 7){

document.getElementById("resultado").innerHTML = "Reprovado"
    }

    else if(media == 10){

        document.getElementById("resultado").innerHTML = "Aprovado com Distinção"
            }

    

    
    
}