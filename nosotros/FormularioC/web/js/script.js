$(document).ready(function(){
	$('#btnSend').click(function(){
                var nombre, correo, mensaje, telefono;
		var validacion = '';

		// Validado Nombre ==============================
		if( $('#names').val() == '' ){
			validacion += '<p>Escriba un nombre</p>';
			$('#names').css("border-bottom-color", "#FE7E7E");
		} else{
			$('#names').css("border-bottom-color", "#D1D1D1");
                        nombre = $('#names').val();
		}

		// Validando Correo electronico ================
		if( $('#email').val() == '' ){
			validacion += '<p>Ingrese su correo electronico</p>';
			$('#email').css("border-bottom-color", "#FE7E7E");
		} else{
			$('#email').css("border-bottom-color", "#D1D1D1");
                        correo = $('#email').val();
		}

		// Validando Mensaje ===========================
		if( $('#mensaje').val() == '' ){
			validacion += '<p>Escriba un mensaje</p>';
			$('#mensaje').css("border-bottom-color", "#FE7E7E");
		} else{
			$('#mensaje').css("border-bottom-color", "#D1D1D1");
                        mensaje = $('#mensaje').val();
		}

		// ENVIANDO MENSAJE ============================
		if( validacion == '' == false){
			var mensajeModal =	'<div class="modal_wrap">'+
									'<div class="mensaje_modal">'+
										'<h3>Errores encontrados</h3>'+
										validacion+
										'<span class="btn_close" id="btnClose">Cerrar</span>'
									'</div>'+
								'</div>';

			$('body').append(mensajeModal);
		}else{
                    telefono = $("#phone").val();
                    
                    var envioDato = {
                        mensaje: mensaje,
                        correo : correo,
                        nombre:nombre,
                        telefono:telefono
                    };
                    
                    $.post("http://localhost:80/Contactanos/mail",envioDato, function(datos){
                        var mensajeModal =	'<div class="modal_wrap">'+
									'<div class="mensaje_modal">'+
										'<h3>Peticion concedida</h3>'+
										datos+
										'<span class="btn_close" id="btnClose">Cerrar</span>'
									'</div>'+
								'</div>';

			$('body').append(mensajeModal);
                    })
                }

		// CERRANDO MODAL ==============================
		$('#btnClose').click(function() {
			$('.modal_wrap').remove();
		});

	});
});