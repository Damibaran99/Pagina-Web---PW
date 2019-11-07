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
