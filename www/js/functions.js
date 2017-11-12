		function nivel1_start(pin){
			nivel1.palabras = [];
			$("#nivel1-palabra-1").html("Palabra 1");
			$("#nivel1-palabra-2").html("Palabra 2");
			nivel1.index=0;
			nivel1.total=0;
			nivel1.correctas=0;
			$.getJSON(appConstants.ejerciciosNivel1URL,{nickname: sessionConstants.nickname,pin: pin},function( data ) {
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
		
		function nivel2_start(pin){
			nivel2.palabras = [];
			nivel2.index=0;
			nivel2.total=0;
			nivel2.correctas=0;
			$("#nivel2-letras").empty();
			$.getJSON(appConstants.ejerciciosNivel2URL,{nickname: sessionConstants.nickname,pin: pin},function( data ) {
				nivel2.palabras=data.nivel2;
				var index=0;
				nivel2.palabras[0].palabra.split('').forEach(function(letra) {
					index++;
					$("#nivel2-letras").append("<button onclick=nivel2_check_letra("+index+")>"+letra+"</button>");
				});
			});
			};
			
		function nivel2_check_letra(num_letra){
			if (num_letra === nivel2.palabras[nivel2.index].tildada)
				{
					nivel2.correctas++;
				}
			nivel2.total++;
			nivel2.index++;
			if (nivel2.index >= nivel2.palabras.length)
				{
					nivel2_end();
				}
			else
				{
					$("#nivel2-letras").empty();
					var index = 0;
					nivel2.palabras[nivel2.index].palabra.split('').forEach(function(letra) {
						index++;
						$("#nivel2-letras").append("<button onclick=nivel2_check_letra("+index+")>"+letra+"</button>");
					});
				}
		};
		
		function nivel2_end(){
			nivel2.puntuacion=nivel2.correctas/nivel2.total*10;
			alert("Tu puntuacion es de " + nivel2.puntuacion);
			parent.history.back();
		};

		function nivel3_start(pin){
			nivel3.palabras = [];
			nivel3.index=0;
			nivel3.total=0;
			nivel3.correctas=0;
			nivel3.palabras=nivel3.palabras_totales.sort(() => .5 - Math.random()).slice(0,10); //TODO: Tener en cuenta pin
			$("#nivel3-palabra-1").html(nivel3.palabras[0].palabra1);
			$("#nivel3-palabra-2").html(nivel3.palabras[0].palabra2);
			$("#nivel3-imagen").attr("src",nivel3.palabras[0].urlImagen);
			};

		function nivel3_check_word(num_palabra){
			if (num_palabra === nivel3.palabras[nivel3.index].correcta)
				{
					nivel3.correctas++;
				}
			nivel3.total++;
			nivel3.index++;
			if (nivel3.index >= nivel3.palabras.length)
				{
					nivel3_end();
				}
			else
				{
					$("#nivel3-palabra-1").html(nivel3.palabras[nivel3.index].palabra1);
					$("#nivel3-palabra-2").html(nivel3.palabras[nivel3.index].palabra2);
					$("#nivel3-imagen").attr("src",nivel3.palabras[nivel3.index].urlImagen);
				}
		};

		function nivel3_end(){
			nivel3.puntuacion=nivel3.correctas/nivel3.total*10;
			alert("Tu puntuacion es de " + nivel3.puntuacion);
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
						alert(result);
						location.href="#loginPage";
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
					if(result=="0-Alumno"){
						location.href="#userHome";
						sessionConstants.nickname = document.getElementById("nnUser").value;
					}
					else{
						alert("Tipo de usuario incorrecto");
					}
				}
				else{
					if(document.getElementById("radio-alumno-login-2").checked){
						if(result=="0-Docente"){
							location.href="#homePage";
							sessionConstants.nickname = document.getElementById("nnUser").value;
						}
						else{
							alert("Tipo de usuario incorrecto");
						}	
					}
					else{
						alert("Debes marcar el tipo de usuario");
					}
				}

			}, "text");	
		};

		function modificar_foto_perfil(){
			navigator.device.capture.captureImage(function(fotos){
				window.resolveLocalFileSystemURL(fotos[0].fullPath,
						function gotFile(fileEntry)
						{
								window.resolveLocalFileSystemURL(appConstants.persistentStorageFolderURL,
								function(dirEntry)
								{
									dirEntry.getDirectory("img", {create: true, exclusive: false},
									function(dirEntry){
										fileEntry.copyTo(dirEntry,sessionConstants.profilePhotoName,
										function onSuccess()
										{
											$("#foto_perfil").attr("src",sessionConstants.profilePhotoURL + "?" + new Date().getTime());
										});
									});
								});
						}
			)},
			function(){
				alert("Se ha producido un error. No se puede sacar la foto");
			})
		};
		function startAudioRecord(){
			$("#audioN2R").addClass("ui-disabled");
			audio.doStartRecord();
			$("#audioN2S").removeClass("ui-disabled");
		};
		function stopAudioRecord(){
			$("#audioN2R").blur();
			var fileFolder = appConstants.localPermanentStorageFolderAudio();
			var fileName = document.getElementById("palabraTilde").value + ".3gp";
			audio.doStopRecordAsync(fileFolder, fileName,
					function(){
						$("#audioN2S").blur();
						$("#audioN2S").addClass("ui-disabled");
						$("#audioN2R").removeClass("ui-disabled");
					}
			);
		};
		function addN2(){
			//Parte de subir el audio
			var urlLocal = appConstants.localPermanentStorageFolderAudio() + document.getElementById("palabraTilde").value + ".3gp";
			var uploadFile = true;
			if(navigator.connection.type != Connection.WIFI){
				uploadFile=confirm("La descarga puede generar gran tráfico de datos");
			}
			
			if(uploadFile==true){
				fileUtilities.uploadFileAsync(urlLocal, "audio", appConstants.uploadFileURL,
						function(){
							var remoteURL = appConstants.serverURL + "audio/" + document.getElementById("palabraTilde").value + ".3gp";
							var data={nivel2JSON: {audio: remoteURL, palabra: document.getElementById("palabraTilde").value, tildada: parseInt(document.getElementById("posTilde").value)},
									  login: sessionConstants.nickname,
									  url: remoteURL};
							$.ajax({
								url : appConstants.postNivel2URL,
								type: "post",
								data: JSON.stringify(data),
								contentType: "application/json",
								dataType:"text",
								success: function (result)
								{
									alert("Añadido correctamente");
								},
								error: function (result) {
									alert("No se ha podido añadir correctamente");
								}
							});
						},
						function(){
							alert("No se ha podido subir el audio");
						});
			}
			
		};
