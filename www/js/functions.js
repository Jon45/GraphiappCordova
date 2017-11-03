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