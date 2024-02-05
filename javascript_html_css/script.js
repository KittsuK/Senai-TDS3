function soma(){
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var respSoma = num1 + num2
    document.getElementById("resSoma").textContent = respSoma.toFixed(2);
}
function sub(){
    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;
    var respSub = num3 - num4
    document.getElementById("resSub").textContent = respSub.toFixed(2);
}
function div(){
    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;
    var respDiv = num5 / num6
    document.getElementById("resDiv").textContent = respDiv.toFixed(2);
}
function mult(){
    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;
    var respMult = num7 * num8
    document.getElementById("resMult").textContent = respMult.toFixed(2);
}
function med3(){
    var num10 = document.getElementById("num10").valueAsNumber;
    var num11 = document.getElementById("num11").valueAsNumber;
    var num12 = document.getElementById("num12").valueAsNumber;
    var respMed3 = (num10 + num11 + num12)/3
    document.getElementById("resMed3").textContent = respMed3.toFixed(2);
}
function clear(){
    window.location.reload();
}