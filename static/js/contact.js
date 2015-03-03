function sendMail(){
    
//Lee contenido de los difrenetes campos del formulario y los asigna a variables

var name = document.getElementById("template-contactform-name").value; 
var email = document.getElementById("template-contactform-email").value;
var subject = document.getElementById("template-contactform-subject").value;
var comment = document.getElementById("template-contactform-message").value;
var phone = document.getElementById("template-contactform-phone").value;

//Validación de los campos requeridos (Nombre, Email)

if (name == ''){
    $("#template-contactform-name").addClass( "error" );
}else if (email == ''){
    $("#template-contactform-email").addClass( "error" );
}else {
  

      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'rSurnRXZBLAJP8-rftTzGA', //API Key asiganada
          'message': {
            'from_email': email, 
            "from_name": name,
            'to': [
              {
                'email': 'info@zummo.com.pa', //Destinatario del correo
                'name': 'Contacto Zummo Latin Corp', //Nombre del Remitente
                'type': 'to'
              }
            ],
            'subject': 'Contacto vía Website', //Titulo del correo
            'html': '<h3>Nuevo contacto zummo.com.pa</h3><p>Nombre: ' + name + '</p><p>Email: ' + email + '</p><p>Teléfono: ' + phone + '</p><p>Título: ' + subject + '</p><p>Comentario: ' + comment +'</p><p><h5>Datos de contacto recibidos desde el formulario de contacto de zummo.com.pa</h5></p>'
          }
        }
      });
    
    //Se ejecuta cuando el correo ya ha sido enviado
    $("#template-form-result").css("display", "block");
    $("#template-form-submit").css("display", "none");
    $("#template-contactform-email").removeClass( "error" );
    $("#template-contactform-name").removeClass( "error" );
    $("#template-contactform :input").prop("disabled", true);
    }

}


