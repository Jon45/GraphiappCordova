		function nivel1_start(pin){
			nivel1.palabras = [];
			$("#nivel1-palabra-1").html("Palabra 1");
			$("#nivel1-palabra-2").html("Palabra 2");
			nivel1.index=0;
			nivel1.total=0;
			nivel1.correctas=0;
			$.getJSON(appConstants.ejerciciosNivel1URL,{nickname: appConstants.nickname,pin: pin},function( data ) {
				nivel1.palabras=data.nivel1;
				$("#nivel1-palabra-1").html(nivel1.palabras[0].palabra1);
				$("#nivel1-palabra-2").html(nivel1.palabras[0].palabra2);
				$("#nivel1-palabra-1").prop('disabled', false);
				$("#nivel1-palabra-2").prop('disabled', false);
				});
			};
			
		function nivel1_check_word(num_palabra){
			if (num_palabra === nivel1.palabras[nivel1.index].correcta)
				{
					nivel1.correctas++;
				}
			nivel1.total++;
			nivel1.index++;
			if (nivel1.index >= nivel1.palabras.length)
				{
					nivel1_end();
				}
			else
				{
					$("#nivel1-palabra-1").html(nivel1.palabras[nivel1.index].palabra1);
					$("#nivel1-palabra-2").html(nivel1.palabras[nivel1.index].palabra2);
				}
		};
		
		function nivel1_end(){
			nivel1.puntuacion=nivel1.correctas/nivel1.total*10;
			alert("Tu puntuacion es de " + nivel1.puntuacion);
			parent.history.back();
		};
		function regNewUser(){
			if(document.getElementById("radio-alumno-registro-1").checked) {
				var data = {nombre: document.getElementById("nUser").value,
						apellidos: document.getElementById("apUser").value,
						password: document.getElementById("pswdUser").value};
				$.ajax({
					url : appConstants.registerUserURL,
					type: "post",
					data: JSON.stringify(data),
					contentType: "application/json",
					dataType:"text",
					success: function (result)
					{
						alert("Se ha registrado el nuevo usuario correctamente");
					},
					error: function (result) {
						alert("No se ha podido registrar al nuevo usuario correctamente");
					}
				});
			}
			else{
				if(document.getElementById("radio-alumno-registro-2").checked){
					//Permanent storage
				}
				else{
					alert("Debes marcar el tipo de usuario");
				}
			}
			
		};
		function logUser(){
			
			var data={nickname: document.getElementById("nnUser").value,
					password: document.getElementById("pwUser").value};
			$.get(appConstants.loginUserURL,data, function(result){
				if(document.getElementById("radio-alumno-login-1").checked){
					location.href="#userHome";
				}
				else{
					if(document.getElementById("radio-alumno-login-2").checked){
						location.href="#homePage";
					}
					else{
						alert("Debes marcar el tipo de usuario");
					}
				}
			}, "text");
			
			
		};