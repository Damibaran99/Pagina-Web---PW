var a = 1890;
function agregarPersona(){
    var uno = document.getElementById("inscripcion");
    var dos = uno.cloneNode(true);
    $(dos).children().val("");
    document.getElementById("contenedor").appendChild(dos);
    }

function eliminarPersona(){
     var uno = document.getElementById("contenedor"). lastChild;
     var tamanio = document.getElementById("contenedor").childNodes.length;
     if (tamanio > 3){
     document.getElementById("contenedor").removeChild(uno);
     }
    else{
    document.getElementById("form").reset();
    }
}

function sumarPrecio(){
    a = a + 1890;
    document.getElementById("precio").innerText= "$" + a;
    }

function restarPrecio(){
    if(a !=1890){
    a = a - 1890;
    document.getElementById("precio").innerText= "$" + a;
    }
}

$(document).ready(function(){
var modal = document.getElementById("myModal");
var btn = document.getElementById("boton");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    var contenido = "";
    var tags = ["Nombre", "Apellido", "Dni"];
    var i = 0;
    var cantPer = 1;

    $('.inscripcion').each(function(){
        contenido = contenido.concat("<ul>");
        contenido = contenido.concat("<li>PERSONA "+cantPer+"</li>");

       $(this).find("input").each(function(){
        contenido = contenido.concat("<li>");
        contenido = contenido.concat(tags[i]+": "+$(this).val()+" ")
        contenido = contenido.concat("</li>");
        console.log(contenido);
        i++;

      });
      contenido = contenido.concat("</ul>");
      i=0;
      cantPer +=1;

     });
     $("#ingresar_per").html(contenido);
  modal.style.display = "block";
  return false;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {

  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});
