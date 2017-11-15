		function nivel1_start(pin){
			nivel1.palabras = [];
			$("#nivel1-palabra-1").html("Palabra 1");
			$("#nivel1-palabra-2").html("Palabra 2");
			nivel1.index=0;
			nivel1.total=0;
			nivel1.correctas=0;
			$.getJSON(appConstants.ejerciciosNivel1URL,{nickname: studentSessionConstants.nickname,pin: pin},function( data ) {
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
			studentSessionConstants.resultados1=nivel1.correctas/nivel1.total*10;
			alert("Tu puntuacion es de " + studentSessionConstants.resultados1);
			localStorage.setItem("lastLoginUsed", JSON.stringify(studentSessionConstants));
			parent.history.back();
		};
		
		function nivel2_start(pin){
			nivel2.palabras = [];
			nivel2.index=0;
			nivel2.total=0;
			nivel2.correctas=0;
			$("#nivel2-letras").empty();
			$.getJSON(appConstants.ejerciciosNivel2URL,{nickname: studentSessionConstants.nickname,pin: pin},function( data ) {
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
			studentSessionConstants.resultados2=nivel2.correctas/nivel2.total*10;
			alert("Tu puntuacion es de " + studentSessionConstants.resultados2);
			localStorage.setItem("lastLoginUsed", JSON.stringify(studentSessionConstants));
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
			studentSessionConstants.resultados3=nivel3.correctas/nivel3.total*10;
			alert("Tu puntuacion es de " + studentSessionConstants.resultados3);
			localStorage.setItem("lastLoginUsed", JSON.stringify(studentSessionConstants));
			parent.history.back();
		};

		function nivel4_start(pin){
			nivel4.titulares = [];
			nivel4.index=0;
			nivel4.total=0;
			nivel4.correctas=0;
			$("#nivel4-palabras").empty();
			nivel4.titulares=nivel4.titulares_totales.sort(() => .5 - Math.random()).slice(0,10);
				var index=0;
				nivel4.titulares[0].titular.split(' ').forEach(function(palabra) {
					index++;
					$("#nivel4-palabras").append("<button data-role=\"none\" onclick=nivel4_check_palabra("+index+")>"+palabra+"</button>");
				});
			};

		function nivel4_check_palabra(num_palabra){
			if (num_palabra === nivel4.titulares[nivel4.index].incorrecta)
				{
					nivel4.correctas++;
				}
			nivel4.total++;
			nivel4.index++;
			if (nivel4.index >= nivel4.titulares.length)
				{
					nivel4_end();
				}
			else
				{
					$("#nivel4-palabras").empty();
					var index = 0;
					nivel4.titulares[nivel4.index].titular.split(' ').forEach(function(palabra) {
						index++;
						$("#nivel4-palabras").append("<button onclick=nivel4_check_palabra("+index+")>"+palabra+"</button>");
					});
				}
		};

		function nivel4_end(){
			studentSessionConstants.resultados4=nivel4.correctas/nivel4.total*10;
			alert("Tu puntuacion es de " + studentSessionConstants.resultados4);
			localStorage.setItem("lastLoginUsed", JSON.stringify(studentSessionConstants));
			parent.history.back();
		};
		
		function nivel5_start(pin){
			nivel5.ejercicios = [];
			nivel5.index=0;
			nivel5.total=0;
			nivel5.correctas=0;
			$("#nivel5-palabra-1").empty();
			$("#nivel5-palabra-2").empty();
			$("#nivel5-frase-1").empty();
			$("#nivel5-frase-2").empty();
			
			nivel5.ejercicios=nivel5.ejercicios_totales.sort(() => .5 - Math.random()).slice(0,10);
			nivel5IntroducirPalabras(nivel5.index);
			nivel5CambiarFrase(nivel5.ejercicios[0].frase1,1);
			nivel5CambiarFrase(nivel5.ejercicios[0].frase2,2);
			};

		function nivel5CambiarFrase(frase,num_frase)
		{
			var frase_split = frase.split('***',2);
			$("#nivel5-frase-"+num_frase).empty();
			$("#nivel5-frase-"+num_frase).append(frase_split[0] + " ");
			$("#nivel5-frase-"+num_frase).append("<input data-role=\"none\" type=\"text\" id=\"nivel5-botonFrase-" + num_frase + "\"/>");
			$("#nivel5-botonFrase-"+num_frase).attr("class","");
			$("#nivel5-frase-"+num_frase).append(" " + frase_split[1]);
		};
		
		function nivel5_check_palabras(){
			if ($("#nivel5-botonFrase-1").val() === nivel5.ejercicios[nivel5.index].palabra1 && $("#nivel5-botonFrase-2").val() === nivel5.ejercicios[nivel5.index].palabra2)
			{
				nivel5.correctas++;
			}
			nivel5.total++;
			nivel5.index++;
			if (nivel5.index >= nivel5.ejercicios.length)
				{
					nivel5_end();
				}
			else
				{
					nivel5IntroducirPalabras(nivel5.index);
					nivel5CambiarFrase(nivel5.ejercicios[nivel5.index].frase1,1);
					nivel5CambiarFrase(nivel5.ejercicios[nivel5.index].frase2,2);
				}
		};

		function nivel5IntroducirPalabras(index)
		{
			if (Math.random() < 0.5)
			{
				$("#nivel5-palabra-1").html(nivel5.ejercicios[index].palabra1);
				$("#nivel5-palabra-2").html(nivel5.ejercicios[index].palabra2);
			}
		else
			{
				$("#nivel5-palabra-1").html(nivel5.ejercicios[index].palabra2);
				$("#nivel5-palabra-2").html(nivel5.ejercicios[index].palabra1);
			}
		}
		
		function nivel5_end(){
			studentSessionConstants.resultados5=nivel5.correctas/nivel5.total*10;
			alert("Tu puntuacion es de " + studentSessionConstants.resultados5);
			localStorage.setItem("lastLoginUsed", JSON.stringify(studentSessionConstants));
			parent.history.back();
		};

		function introducirDatosPerfil()
		{
			$("#foto_perfil").attr("src",studentSessionConstants.profilePhotoURL);
			$("#perfil-nombre").html(studentSessionConstants.nickname);
			modificarMeterPerfil(studentSessionConstants.resultados1,"#div-meter-1");
			modificarMeterPerfil(studentSessionConstants.resultados2,"#div-meter-2");
			modificarMeterPerfil(studentSessionConstants.resultados3,"#div-meter-3");
			modificarMeterPerfil(studentSessionConstants.resultados4,"#div-meter-4");
			modificarMeterPerfil(studentSessionConstants.resultados5,"#div-meter-5");
			modificarMeterPerfil(studentSessionConstants.resultados8,"#div-meter-8");
		}

		function modificarMeterPerfil(puntuacion,id)
		{
			var html;
			if (puntuacion != -1)
			{
				html="<meter value=\"" + puntuacion/10 + "\">" + puntuacion*10 + "%</meter>" + puntuacion*10 + "%";
			}

			else
			{
				html="<font color=\"red\">No completado</font>";
			}
			$(id).html(html);
		}

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
					//DOCENTE
					var db = window.openDatabase("TeachersDB", "1.0", "TeachersDB", 100000);
					db.transaction(populateDB,errorDB, successDB);
				}
				else{
					alert("Debes marcar el tipo de usuario");
				}
			}
			
		};
		function populateDB(tx){
			tx.executeSql('CREATE TABLE IF NOT EXISTS Teachers (id unique, nombre, apellidos, nickname, password)');
		};
		function successCB(){
			
		};
		function errorCB(){
			
		};

		function logUser(){
			
			var data={nickname: document.getElementById("nnUser").value,
					password: document.getElementById("pwUser").value};
			$.get(appConstants.loginUserURL,data, function(result){
				if(document.getElementById("radio-alumno-login-1").checked){
					if(result=="0-Alumno"){
						location.href="#userHome";
						studentSessionConstants.nickname = document.getElementById("nnUser").value;
						localStorage.setItem("lastLoginUsed", JSON.stringify(studentSessionConstants));
					}
					else{
						alert("Tipo de usuario incorrecto");
					}
				}
				else{
					if(document.getElementById("radio-alumno-login-2").checked){
						if(result=="0-Docente"){
							location.href="#homePage";
							teacherSessionConstants.nickname = document.getElementById("nnUser").value;
							localStorage.setItem("lastLoginUsed", JSON.stringify(teacherSessionConstants));
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
		
		function addClass(){
			var d = new Date(); //Vamos a configurar la fecha para metérsela a la clase
			var fecha = [d.getFullYear(), d.getMonth(), d.getDate()];
			var fechastring = fecha.join("");
			
			var fechaint = parseInt(fechastring);
			
			var data= {fecha: fechaint,
					tematica: document.getElementById("classTheme").value,
					loginDocente: sessionConstants.nickname};
			
			$.ajax({
				url: appConstants.registerClassURL,
				type: "post",
				data: JSON.stringify(data),
				contentType: "application/json",
				dataType:"text",
				success: function(result) {
					sessionConstants.idClase = result;
					location.href="#postNivel1";
				},
				error: function(result){
					alert(result);
					alert("no se pudo registrar la clase");
				}
			});
			
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
				uploadFile=confirm("La subida puede generar gran tráfico de datos");
			}
			
			if(uploadFile==true){
				fileUtilities.uploadFileAsync(urlLocal, "audio", appConstants.uploadFileURL,
						function(){
							var remoteURL = appConstants.serverURL + "audio/" + document.getElementById("palabraTilde").value + ".3gp";
							var data={nivel2JSON: {audio: remoteURL, palabra: document.getElementById("palabraTilde").value, tildada: parseInt(document.getElementById("posTilde").value), clase: sessionConstants.idClase},
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
		function addN3(){
			var localURL = document.getElementById("filePicker").value;
			var uploadFile = true;
			if(navigator.connection.type != Connection.WIFI){
				uploadFile=confirm("La subida puede generar gran tráfico de datos");
			}
			if(uploadFile==true){
				fileUtilities.uploadFileAsync(localURL, "image", appConstants.uploadFileURL,
						function(){
							var splttdStr = localURL.split("/");
							var fileName = splttdString.slice(-1);
							var remoteURL = appConstants.serverURL + "img/" + fileName;
							var data={};
							var order = Math.floor((Math.random()*2)+1);
							if(order==1){
								data = {palabra1: document.getElementById("pCorrecta3").value, palabra2: document.getElementById("pIncorrecta3").value, correcta: 1, url: remoteURL, pin: getFechaInt()};
							}
							else{
								data = {palabra1: document.getElementById("pIncorrecta3").value, palabra2: document.getElementById("pCorrecta3").value, correcta: 2, url: remoteURL, pin: getFechaInt()};
							}
							
							nivel3.palabras_totales.push(data);
							localStorage.setItem("Nivel3",JSON.stringify(nivel3));
						},
						function(){
							alert("No se ha subido la imagen");
						});
			}
		};
		function getFechaInt(){
			var d = new Date(); 
			var fecha = [d.getFullYear(), d.getMonth(), d.getDate()];
			var fechastring = fecha.join("");
			var fechaint = parseInt(fechastring);
			return fechaint;
		}
		function addN1(){
			
			var order = Math.floor((Math.random()*2)+1);
			var data; 
			if(order==1){
				data = {nivel1JSON: {correcta: 1, palabra1: document.getElementById("pCorrecta").value, palabra2: document.getElementById("pIncorrecta").value, clase: parseInt(sessionConstants.idClase)},
						
						login: sessionConstants.nickname};
			}
			else{
				data = {nivel1JSON: {correcta: 2, palabra1: document.getElementById("pIncorrecta").value, palabra2: document.getElementById("pCorrecta").value, clase: parseInt(sessionConstants.idClase)},
						
						login: sessionConstants.nickname};
			}
			
			$.ajax({
				url: appConstants.postNivel1URL,
				type: "post",
				data: JSON.stringify(data),
				contentType: "application/json",
				dataType: "text",
				success: function(result){
					alert("Añadido correctamente");
				},
				error: function(result){
					
					alert("No se ha podido añadir");
				}
			});
		};
		function addN4(){
			
			var nuevoTitular = {titular: document.getElementById("titular").value,
				incorrecta: parseInt(document.getElementById("posPInc").value)	
			};
			nivel4.titulares_totales.push(nuevoTitular);
			localStorage.setItem("Nivel4", JSON.stringify(nivel4));
		};
		function addN5(){
			var nuevoEjercicio={palabra1: document.getElementById("palabra1").value,
					palabra2: document.getElementById("palabra2").value,
					frase1: document.getElementById("frase1").value,
					frase2: document.getElementById("frase2").value};
			nivel5.ejercicios_totales.push(nuevoEjercicio);
			localStorage.setItem("Nivel5", JSON.stringify(nivel5));
		};
		function addN8(){
			var nuevoEjercicio={palabra: document.getElementById("palabra1").value, acento: 0};
			if(document.getElementById("radio1").checked){
				nuevoEjercicio.acento = 1;
			}
			else{
				if(document.getElementById("radio2").checked){
					nuevoEjercicio.acento = 2;
				}
				else{
					nuevoEjercicio.acento = 3;
				}
			}
			nivel8.ejercicios_totales.push(nuevoEjercicio);
			localStorage.setItem("Nivel8", JSON.stringify(nivel8));
		};
