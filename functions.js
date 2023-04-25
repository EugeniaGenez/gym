$(document).ready(function () {
  let estadoOculto = false;
  let pregunta = $("#hidden-text");
  let btn=$("#hidden-btn")
 
  btn.click(function () {
    if (estadoOculto) {
      pregunta.hide();
      estadoOculto=false;
    } else{
      pregunta.show();
        estadoOculto=true;
      }
    }
  )});


  let estadoOculto2 = false;
  let btn2=$("#hidden-btn2")
  let pregunta2 = $("#hidden-text2");
 btn2.click(function () {
  if (estadoOculto2) {
    pregunta2.hide();
    estadoOculto2=false;
  } else {
    pregunta2.show();
    estadoOculto2=true;
    
  }
 })
  

   let estadoOculto3 = false;
   let pregunta3 = $("#hidden-text3");
   let btn3=$("#hidden-btn3")
  btn3.click(function () {
    if (estadoOculto3) {
      pregunta3.hide();
      estadoOculto3=false;
    } else {
      pregunta3.show();
      estadoOculto3=true;
      
    }
  })

  let estadoOculto4 = false;
  let pregunta4 = $("#hidden-text4");
  let btn4=$("#hidden-btn4")

  btn4.click(function () {
    if (estadoOculto4) {
      pregunta4.hide();
      estadoOculto4=false;
    } else {
      pregunta4.show();
      estadoOculto4=true;
    }
  })
  
//funcion para cards

$(document).ready(function(){
  $(".Cxit").hide();
$("#abrir-modal").click(function()
  {$("#modalContacto").show();}
)

}, 
$('.cerrar-modal').click( function() {
  $("#modalContacto").hide();
  $(".Cxit").hide();
}),

)
/*
var en=0,ea=0,em=0,emen=0;
$(document).ready(function() {
$('#FORMU').submit(function(event) {

event.preventDefault();
const constraints = {
nombre: {
presence: true,
length: {
minimum: 3,
maximum: 20,
message: 'debe tener entre 3 y 20 caracteres'
}
},
asunto: {
presence: true
},
email: {
presence: true,
email: true
},
};

function addError(ide, message) {
  const ideEl = $(`#${ide}`);
  const errorEl = $('<div>').addClass('invalid-feedback').text(message);
  ideEl.parent().append(errorEl);
  ideEl.addClass('is-invalid');
}

const form = $(this);
const nombre = $('#nombre').val().trim();
const asunto = $('#asunto').val().trim();
const email = $('#email').val().trim();
const mensaje = $('#mensaje').val().trim();

if (nombre == '') {

    if(en == 0){addError('nombre', 'Por favor ingrese su nombre.');
    en=1;
}

} else {
  const fieldEl = $('#nombre');
  fieldEl.removeClass('is-invalid');
  const errorEl = fieldEl.next();
  if (errorEl && errorEl.hasClass('invalid-feedback')) {
    errorEl.remove();
  }
}

if (asunto == '') {
  if(ea==0){addError('asunto', 'Por favor ingrese el asunto del mensaje.');
  ea=1;}
  
} else {
  const fieldEl = $('#asunto');
  fieldEl.removeClass('is-invalid');
  const errorEl = fieldEl.next();
  if (errorEl && errorEl.hasClass('invalid-feedback')) {
    errorEl.remove();
  }
}

// Validar email usando expresiones regulares
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  if(em==0){addError('email', 'Por favor ingrese un correo electrónico válido.'); em=1;}
} else {
  const fieldEl = $('#email');
  fieldEl.removeClass('is-invalid');
  const errorEl = fieldEl.next();
  if (errorEl && errorEl.hasClass('invalid-feedback')) {
    errorEl.remove();
  }
}

if (mensaje === '') {
  if(emen==0){ addError('mensaje', 'Por favor ingrese el mensaje.'); emen=1;}
} else {
  const fieldEl = $('#mensaje');
  fieldEl.removeClass('is-invalid');
  const errorEl = fieldEl.next();
  if (errorEl && errorEl.hasClass('invalid-feedback')) {
    errorEl.remove();
  }
}

// Si no hay campos inválidos, enviar formulario
if (!$('.is-invalid').length) {
  if (nombre !== '' && asunto !== '' && email !== '' && mensaje !== '') {
    $("#mensaje-exito").show();
    $("#mensaje-exito").text("¡Enviado con éxito!");
    // Agregar aquí el código para enviar el formulario
  } else {
    addError('nombre', 'Por favor ingrese su nombre.');
    addError('asunto', 'Por favor ingrese el asunto del mensaje.');
    addError('email', 'Por favor ingrese su correo electrónico.');
    addError('mensaje', 'Por favor ingrese el mensaje.');
  }
}
});

$(".cerrar-modal").click(function(){
    en=0,ea=0,em=0,emen=0;
    $('.is-invalid').removeClass('is-invalid');
    $('.invalid-feedback').remove();
    $("#nombre").val("");
    $("#asunto").val("");
    $("#email").val("");
    $("#mensaje").val("");
    $("#mensaje-exito").hide();
})
}
);*/
$(document).ready(function () {
 
  // validacion formulario reclamo, siempre se hace la validacion al hacer click en el boton submit o cuando se da un enter en un input
  var Reglas = {  // se establecen las reglas para nombre
      "nombre": {
          presence: { message: "Requerido" },
          length: { minimum: 3, message: "Min 3 letras" },
          format: {
              pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
              message: "Solo puede contener letras y espacios"
          }
      },
      "asunto": {
          presence: { message: "Requerido" },
          length: { minimum: 3, message: "Min 3 letras" },
          format: {
              pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
            
          }
      },
      "email": {
          presence: { message: "Requerido" },
          email: { message: "Inválido" }
      }
  };

  $("#FORMU").submit(function (event) { //se selecciona Formulario// 
      event.preventDefault(); //con el event o evento se detiene las funciones normales o predefinidas en este caso para que no se envie el formulario  
      $("#mensaje-exito").hide();
      var values = validate.collectFormValues(event.target); //validate.collectFormValues(event.target) recopila los valores del formulario en un objeto
      var errors = validate(values, Reglas); // validate contiene values "que son los datos del formulario", constraints "son lo que definimos anteriormente, las reglas a aplicar"
      if (errors) { // si se cumple este if se llama a la funcion errors
          MuestraErrors(errors);
      } else {
          MuestraPaso(); // se llama a MuestraPaso
      }
  });

  function MuestraErrors(errors) {
    $('.error').remove();
      $("input").removeClass("is-invalid");//Se limina la clase "is-invalid"
      for (var indice in errors) { //se recorre error con un for in donde la variable indice se establece como el nombre de una propiedad de errors, es decir, el nombre de un campo del formulario que ha fallado en la validación.
    var errorElement = $("#" + indice); // si indice es "nombre-reclamo", entonces la expresión "#" + indice será "#nombre-reclamo", que se utiliza para seleccionar el elemento del DOM con id="nombre-reclamo"
    errorElement.addClass("is-invalid");//si el lemento  presenta error entonces se añade la clase "is-invalid"
     var message = errors[indice][0]; //si errors tiene la propiedad "nombre" con un array que contiene el mensaje "Requerido", entonces errors["nombre-reclamo"][0] será igual a "Requerido", y message tomará ese valor en la línea mencionada.
     message = message.replace(/nombre|asunto|email|telefono|compra/gi, ""); //  ("nombre", "apellido", etc.) y los reemplaza por una cadena vacía (""), eliminando así los nombres de los campos del mensaje de error
     var errorParent = errorElement.parent(); // obtiene el elemento padre del campo con errores
    var errorDiv = errorParent.find(".error"); // busca un elemento div con la clase "Tiene-error"
    
    if (errorDiv.length > 0) { // si el elemento ya existe, actualiza su contenido
      errorDiv.text(message);
      
    } else { // de lo contrario, crea un nuevo elemento div y lo agrega
      var errorEl = $('<div>').addClass('error').text(message);
      errorParent.append(errorEl); //pone el elemento en el html
    }
   
      }
  }

  function MuestraPaso() {
    $('.error').remove();
      $("input").removeClass("is-invalid").val(""); // elimina todos los "is-invalid" a todos los input 
      $("textarea").val("");//limpia el texarea 
      $("#mensaje-exito").show();
      $("#mensaje-exito").text("¡Enviado con éxito!");
  }

  $(".cerrar-modal").click(function(){
    
    $('.is-invalid').removeClass('is-invalid');
    $('.error').remove();
    $("#nombre").val("");
    $("#asunto").val("");
    $("#email").val("");
    $("#mensaje").val("");
    $("#mensaje-exito").hide();
})

}

);