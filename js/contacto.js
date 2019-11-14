  function validar() {
      var nombre = document.getElementById("nombre").value;
      var apellido = document.getElementById("apellido").value;
      var email = document.getElementById("email").value;
      var tel = document.getElementById("tel").value;
//      var consulta = document.getSelection("consulta").value;
      var expresion = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


      if(nombre == "") {
        alert("Ingrese su nombre")
            return false;
      }

      if(apellido == "") {
        alert("Ingrese su apellido");
            return false;
      }

      if(email == ""){
        alert("Ingrese su email");
          return false;
      }

      if (!expresion.test(email)) {
        alert("La dirección de correo es incorrecta");
            return false;
     }

     if(tel.length !=0){
     if(tel.length !=8){
         alert("El número de teléfono debe contener 8 caracteres");
            return false;
        }
     }

//     if(consulta.length <= 1000) {
//      alert("Sobrepasó el número máximo de caracteres");
//      return false;
//      }

      alert("Información enviada, nos contactaremos con usted a la brevedad");
      return true;
  }
