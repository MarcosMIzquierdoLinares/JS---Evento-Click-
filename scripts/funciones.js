let caja1, caja2, caja3, caja4, caja5, caja6;

// FUNCIONES CAJA 1
function tiempoAccion1(){
    if (!caja1) {
        caja1 = setInterval(cambioColor1, 500);
    }
}
function detenerAccion1(){
    clearInterval(caja1);
    caja1 = null;
    document.getElementById("c1").style.backgroundColor = "#d4d4d4";

}
function cambioColor1(){
    if (document.getElementById("c1").style.backgroundColor == "green") {
        document.getElementById("c1").style.backgroundColor = "blue";
    }else{
        document.getElementById("c1").style.backgroundColor = "green";
    }

}

document.getElementById("b1").addEventListener("click", tiempoAccion1);
document.getElementById("b2").addEventListener("click", detenerAccion1);

// FUNCIONES CAJA 2

function tiempoAccion2(){
    if (!caja2) {
        caja2 = setInterval(cambioColor2, 500);
    }
}
function detenerAccion2(){
    clearInterval(caja2);
    caja2 = null;
    document.getElementById("c2").style.backgroundColor = "#d4d4d4";

}
function cambioColor2(){
    if (document.getElementById("c2").style.backgroundColor == "yellow") {
        document.getElementById("c2").style.backgroundColor = "maroon";
    }else{
        document.getElementById("c2").style.backgroundColor = "yellow";
    }

}

document.getElementById("b1").addEventListener("click", tiempoAccion2);
document.getElementById("b2").addEventListener("click", detenerAccion2);



// FUNCIONES CAJA 3

function tiempoAccion3(){
    if (!caja3) {
        caja3 = setInterval(cambioColor3, 500);
    }
}
function detenerAccion3(){
    clearInterval(caja3);
    caja3 = null;
    document.getElementById("c3").style.backgroundColor = "#d4d4d4";

}
function cambioColor3(){
    if (document.getElementById("c3").style.backgroundColor == "purple") {
        document.getElementById("c3").style.backgroundColor = "#abe505";
    }else{
        document.getElementById("c3").style.backgroundColor = "purple";
    }

}

document.getElementById("b1").addEventListener("click", tiempoAccion3);
document.getElementById("b2").addEventListener("click", detenerAccion3);


// FUNCIONES CAJA 4

function tiempoAccion4(){
    if (!caja4) {
        caja4 = setInterval(cambioColor4, 500);
    }
}
function detenerAccion4(){
    clearInterval(caja4);
    caja4 = null;
    document.getElementById("c4").style.backgroundColor = "#d4d4d4";

}
function cambioColor4(){
    if (document.getElementById("c4").style.backgroundColor == "chocolate") {
        document.getElementById("c4").style.backgroundColor = "#904b43";
    }else{
        document.getElementById("c4").style.backgroundColor = "chocolate";
    }

}

document.getElementById("b1").addEventListener("click", tiempoAccion4);
document.getElementById("b2").addEventListener("click", detenerAccion4);

// FUNCIONES CAJA 5

function tiempoAccion5(){
    if (!caja5) {
        caja5 = setInterval(cambioColor5, 500);
    }
}
function detenerAccion5(){
    clearInterval(caja5);
    caja5 = null;
    document.getElementById("c5").style.backgroundColor = "#d4d4d4";

}
function cambioColor5(){
    if (document.getElementById("c5").style.backgroundColor == "violet") {
        document.getElementById("c5").style.backgroundColor = "#feaa0f";
    }else{
        document.getElementById("c5").style.backgroundColor = "violet";
    }

}

document.getElementById("b1").addEventListener("click", tiempoAccion5);
document.getElementById("b2").addEventListener("click", detenerAccion5);


// FUNCIONES CAJA 6

function tiempoAccion6(){
    if (!caja6) {
        caja6 = setInterval(cambioColor6, 600);
    }
}
function detenerAccion6(){
    clearInterval(caja6);
    caja6 = null;
    document.getElementById("c6").style.backgroundColor = "#d4d4d4";

}
function cambioColor6(){
    if (document.getElementById("c6").style.backgroundColor == "burlywood") {
        document.getElementById("c6").style.backgroundColor = "#0789ab";
    }else{
        document.getElementById("c6").style.backgroundColor = "burlywood";
    }
}

document.getElementById("b1").addEventListener("click", tiempoAccion6);
document.getElementById("b2").addEventListener("click", detenerAccion6);