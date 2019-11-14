var a = 1890;
function agregarPersona(){
    var uno = document.getElementById("inscripcion");
    var dos = uno.cloneNode(true);
    document.getElementById("contenedor").appendChild(dos);
    }

function eliminarPersona(){
     var uno = document.getElementById("contenedor"). lastChild;
     var tamanio = document.getElementById("contenedor").childNodes.length;
     if (tamanio > 3){
     document.getElementById("contenedor").removeChild(uno);
     }
}

function sumarPrecio(){
    a = a + 1890;
    document.getElementById("precio").innerText= "$" + a;
    }

function restarPrecio(){
    a = a - 1890;
    document.getElementById("precio").innerText= "$" + a;
    }

function clear(){
    document.getElementsByClassName("primeraFila").innerText = " ";
}
