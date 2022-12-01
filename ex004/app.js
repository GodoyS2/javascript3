function reajuste(){
    let sa = document.getElementById("saldo").value

    if((parseInt(sa) >= 280) * 2){

        document.getElementById("resultado").innerHTML = + sa
    }

}