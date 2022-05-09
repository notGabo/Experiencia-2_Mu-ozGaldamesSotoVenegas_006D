$(document).ready(function (){
  jQuery.validator.addMethod("noEspacio", function(value, element) { 
    return value == '' || value.trim().length != 0;  
  }, "No espacios, y por favor no dejes este campo vacio");

  jQuery.validator.addMethod("customEmail", function(value, element) { 
  return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
  }, "Porfavor, ingresa un correo valido. Ejemplo: correo@mail.com");

  jQuery.validator.addMethod("customNombre", function(value, element) { 
    return this.optional( element ) || /^([a-zA-Z])+$/.test( value ); 
    }, "Porfavor, solo letras");


  var $formulario = $('#formularioSolicitud');
  if($formulario.length){
      $formulario.validate({
            rules:{
                nombreEntrada: {
                    minlength: 3,
                    required: true,
                    noEspacio: true,
                    customNombre: true
                },
                apellidoEntrada: {
                  required: true,
                  noEspacio: true,
                  minlength: 3,
                  customNombre: true
                },
                emailEntrada: {
                  required: true,
                  email: true,
                  noEspacio: true,
                  customEmail: true
                },
                numeroEntrada: { 
                  number: true,
                  minlength: 8,
                  maxlength: 11
                },
                descripcionEntrada:{
                  required: true,
                  noEspacio: true,
                  minlength: 3
                },
                checkTyM: {
                    required: true
                }
            },
            messages:{
              nombreEntrada: {
                required: "Porfavor ingresa tu nombre",
                minlength: "Debes ingresar un nombre de al menos 3 caracteres"
              },
              apellidoEntrada: {
                required: "Porfavor ingresa tu apellido",
                minlength: "Debes ingresar un apellido de al menos 3 caracteres"
              },
              emailEntrada: {
                required: "Porfavor ingresa tu correo",
                email: "Porfavor, ingresa un correo valido. Ejemplo: correo@mail.com"
              },
              numeroEntrada: {
                minlength: "Minimo 8 digitos",
                maxlength: "Maximo 11"
              },
              descripcionEntrada:{
                required: "Porfavor, ingresa una descripcion",
                minlength: "Ingresa una descripcion mas completa porfavor"
              },
              checkTyM:{
                required: "Debes aceptar los terminos y condiciones"
              }
            },
            errorPlacement: function(error, element){
              if(element.is(":checkbox")){
                  error.appendTo(element.parents('.check'));
              }
              else{ 
                  error.insertAfter( element );
              }

             }
      });
    }
});