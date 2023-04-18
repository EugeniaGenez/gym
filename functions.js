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
//$("#si").click(function(){$(".Cxit").show();})
)

