  function validar() {
      var nombre = document.getElementById("nombre").value;
      var apellido = document.getElementById("apellido").value;
      var email = document.getElementById("email").value;
      var tel = document.getElementById("tel").value;
      var consulta = document.getElementById("consulta").value;
      expresion = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


      if(this.nombre == "") {
      alert("Ingrese su nombre")
      return false;
      }

      if(apellido == "") {
      alert("Ingrese su apellido");
      return false;
      }

      if (!expresion.test(email) && email == "") {
      alert("La dirección de correo es incorrecta.");
      return false;
     }

     if(tel == "" && tel.length == 8){
         alert("Ingrese su teléfono");
     }

     if(consulta == "" && consulta.length <= 1000) {
      alert("Ingrese su consulta");
      return false;
      }

      alert("Información enviada, nos contactaremos con usted a la brevedad");
      return true;
  }

