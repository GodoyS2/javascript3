function reajuste(){
    let sa = document.getElementById("saldo").value

    if((parseInt(sa) <= 280) * 0.20){

        document.getElementById("resultado").innerHTML = sa
    }

}