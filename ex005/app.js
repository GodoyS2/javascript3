function calcular(){
    let n1 =  document.getElementById("n1").value
    let n2 =  document.getElementById("n2").value

    let media = (parseFloat(n1) + parseFloat(n2)) / 2

    if(media >= 9 && media <= 10){

        document.getElementById("resultado").innerHTML = "Média A"
    }
    else if(media >= 7.5 && media <= 9  ){

        document.getElementById("resultado").innerHTML = "Média B"
    }
    else if(media >= 6 && media <= 7.5){
        document.getElementById("resultado").innerHTML = "Média C"
    }
    else if(media >= 4 && media <= 6){
        document.getElementById("resultado").innerHTML = "Média D"
    }
    else{
        document.getElementById("resultado").innerHTML = "Média E"
    }

    
}