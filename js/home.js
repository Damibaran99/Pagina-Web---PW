$(document).ready(function() {
        var numero=0;
    $(".comprar").click(function() {
        if(numero <10){
            numero++;
        } else {
			alert("Has superado la cantidad maxima de compras por hoy.");
        }
        $("#contador").text(numero);
    });
});
