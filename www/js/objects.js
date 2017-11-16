var nivel1 = {
		correctas : 0,
		total : 0,
		palabras : [],
		index : 0
};

var nivel2 = {
		correctas : 0,
		total : 0,
		palabras : [],
		index : 0
};

var nivel3 = {
		correctas : 0,
		total : 0,
		palabras : [],
		index : 0,
		palabras_totales : [
			{palabra1 : "Abrasar",palabra2 : "Abrazar",correcta : 2, get urlImagen(){return devuelveURLImagen(this)} ,pin : 041117},
			{palabra1 : "Hasta",palabra2 : "Asta",correcta : 2, get urlImagen(){return devuelveURLImagen(this)}, pin : 041117},
			{palabra1 : "Barón",palabra2 : "Varón",correcta : 1, get urlImagen(){return devuelveURLImagen(this)}, pin : 041117},
			{palabra1 : "Cabo",palabra2 : "Cavó",correcta : 1, get urlImagen(){return devuelveURLImagen(this)}, pin : 041117},
			{palabra1 : "Sumo",palabra2 : "Zumo",correcta : 1, get urlImagen(){return devuelveURLImagen(this)}, pin : 041117},
			{palabra1 : "Sabia",palabra2 : "Sabía",correcta : 1, get urlImagen(){return devuelveURLImagen(this)}, pin : 041117},
			{palabra1 : "Arrollo",palabra2 : "Arroyo",correcta : 2, get urlImagen(){return devuelveURLImagen(this)}, pin : 041117},
			{palabra1 : "Vaca",palabra2 : "Baca",correcta : 2, get urlImagen(){return devuelveURLImagen(this)}, pin : 041117},
			{palabra1 : "Hola",palabra2 : "Ola",correcta : 2, get urlImagen(){return devuelveURLImagen(this)}, pin : 041117},
			{palabra1 : "Bobina",palabra2 : "Bovina",correcta : 1, get urlImagen(){return devuelveURLImagen(this)}, pin : 041117},
			{palabra1 : "Cayo",palabra2 : "Callo",correcta : 2, get urlImagen(){return devuelveURLImagen(this)}, pin : 051217},
			{palabra1 : "Cierra",palabra2 : "Sierra",correcta : 2, get urlImagen(){return devuelveURLImagen(this)}, pin : 051217},
			{palabra1 : "Cocer",palabra2 : "Coser",correcta : 2, get urlImagen(){return devuelveURLImagen(this)}, pin : 051217},
			{palabra1 : "Hora",palabra2 : "Ora",correcta : 1, get urlImagen(){return devuelveURLImagen(this)}, pin : 051217},
			{palabra1 : "Poyo",palabra2 : "Pollo",correcta : 2, get urlImagen(){return devuelveURLImagen(this)}, pin : 051217},
			{palabra1 : "Rayo",palabra2 : "Rallo",correcta : 1, get urlImagen(){return devuelveURLImagen(this)}, pin : 051217},
			{palabra1 : "Tubo",palabra2 : "Tuvo",correcta : 1, get urlImagen(){return devuelveURLImagen(this)}, pin : 051217},
			{palabra1 : "Zueco" ,palabra2 : "Sueco",correcta : 1, get urlImagen(){return devuelveURLImagen(this)}, pin : 051217},
			{palabra1 : "Caza",palabra2 : "Casa",correcta : 1, get urlImagen(){return devuelveURLImagen(this)}, pin : 051217},
			{palabra1 : "Bota",palabra2 : "Vota",correcta : 2, get urlImagen(){return devuelveURLImagen(this)}, pin : 051217},
			{palabra1 : "Hierba",palabra2 : "Hierva",correcta : 1, get urlImagen(){return devuelveURLImagen(this)}, pin : 071217},
			{palabra1 : "Cima",palabra2 : "Sima",correcta : 2, get urlImagen(){return devuelveURLImagen(this)}, pin : 071217},
			{palabra1 : "Hierro",palabra2 : "Yerro",correcta : 1, get urlImagen(){return devuelveURLImagen(this)}, pin : 071217},
			{palabra1 : "Bello",palabra2 : "Vello",correcta : 2, get urlImagen(){return devuelveURLImagen(this)}, pin : 071217}
		]
};

var nivel4 = {
	correctas : 0,
	total : 0,
	titulares : [],
	index : 0,
	titulares_totales : [
		{titular : "Descubre que es canival tras morderse la lengua y querer repetir", incorrecta : 4 },
		{titular : "Denuncian situaziones laborables que perjudican a adolescentes", incorrecta : 2 },
		{titular : "La ambruna crece en todo el mundo", incorrecta : 2 },
		{titular : "La venta de las bibiendas ha aumentado un 50%", incorrecta : 5 },
		{titular : "El Rei hace público un sueldo de 292.000€ brutos al año", incorrecta : 2 },
		{titular : "Un abión español se estrella en Turquia por tercera vez lo que va en de año", incorrecta : 2 },
		{titular : "Condenan a ocho de los tres akusados por secuestrar a un menor", incorrecta : 7 },
		{titular : "Rova un coche para aparcarlo mejor", incorrecta : 1 },
		{titular : "Los presos de las cárceles españolas critican la hentrada en masa de “gente normal”", incorrecta : 9 },
		{titular : "Dios admite en el Sielo al primer pecador", incorrecta : 5 }
	]
};

var nivel5 = {
	correctas: 0,
	total: 0,
	index : 0,
	ejercicios : [],
	ejercicios_totales : [
		{frase1 : "Ellos van de paseo en su *** nuevo", frase2 : "Se espera que el grupo *** hoy a su delegado",palabra1 : "bote",palabra2 : "vote"},
		{frase1 : "Roberto *** y aceptó el consejo", frase2 : "El niño se *** y esta llorando",palabra1 : "calló",palabra2 : "cayó"},
		{frase1 : "La bandera ondea en su ***", frase2 : "carmen lleva a María *** el colegio",palabra1 : "asta",palabra2 : "hasta"},
		{frase1 : "En la pared colocaron un *** nuevo", frase2 : "José *** que perdonar a su hermano",palabra1 : "tubo",palabra2 : "tuvo"},
		{frase1 : "Una *** gigante se acercó a la playa", frase2 : "EL niño saludo con un ``***´´ a su amiga.",palabra1 : "ola",palabra2 : "hola"},
		{frase1 : "En las comidas el niño *** agua", frase2 : "el bebé llora cada vez que quiere comer",palabra1 : "bebe",palabra2 : "bebé"},
		{frase1 : "La partida de cartas se gana con el *** de oros", frase2 : "*** de terminar los deberes para ir al parque",palabra1 : "as",palabra2 : "Has" },
		{frase1 : "mi hermana heredó todos los *** de mi tio", frase2 : "¿Mañana *** a la comida familiar?",palabra1 : "Bienes",palabra2 : "Vienes"},
		{frase1 : "Estoy *** con mi mejor amiga", frase2 : "Yo *** la plastilina antes de realizar figuras",palabra1 : "hablando",palabra2 : "ablando"},
		{frase1 : "Este curriculum no es *** para este puesto de trabajo", frase2 : "Se ha escuchado un *** en la granja",palabra1 : "valido",palabra2 : "balido"},
		{frase1 : "Voy a cocinar la sopa en la *** de mi madre", frase2 : "han cavado una *** para esconder el tesoro",palabra1 : "olla",palabra2 : "hoya"},
		{frase1 : "Voy a *** las fotos de mis vacaciones", frase2 : "los soldados se *** ante su superior",palabra1 : "revelar",palabra2 : "rebelar"},
		{frase1 : "debo detenerme en el *** el paso", frase2 : "El pañuelo de la actriz es de ***",palabra1 : "ceda",palabra2 : "seda"},
		{frase1 : "Esta noche ha caido un *** en el tejado", frase2 : "ese niño *** el coche de su madre",palabra1 : "rayo",palabra2 : "ralló"}
	]
};

var nivel8 = {
	correctas: 0,
	total: 0,
	palabras: [],
	palabras_totales: [
		{palabra: "acusar", acento: 1},
		{palabra: "Admisión", acento: 1},
		{palabra: "adoptar", acento: 1},
		{palabra: "celebración", acento: 1},
		{palabra: "brillar", acento: 1},
		{palabra: "mamá", acento: 1},
		{palabra: "capacidad", acento: 1},
		{palabra: "sillón", acento: 1},
		{palabra: "central", acento: 1},
		{palabra: "sofá", acento: 1},
		{palabra: "jurar", acento: 1},
		{palabra: "información", acento: 1},
		{palabra: "verdad", acento: 1},
		{palabra: "ojalá", acento: 1},
		{palabra: "sumar", acento: 1},
		{palabra: "bebé", acento: 1},
		{palabra: "rectangular", acento: 1},
		{palabra: "Anís", acento: 1},
		{palabra: "Parchís", acento: 1},
		{palabra: "Poesía", acento: 1},
		{palabra: "beso", acento: 2},
		{palabra: "cárcel", acento: 2},
		{palabra: "abanico", acento: 2},
		{palabra: "árbol", acento: 2},
		{palabra: "abarrotado", acento: 2},
		{palabra: "Césped", acento: 2},
		{palabra: "adorno", acento: 2},
		{palabra: "líder", acento: 2},
		{palabra: "agua", acento: 2},
		{palabra: "móvil", acento: 2},
		{palabra: "balanza", acento: 2},
		{palabra: "táctil", acento: 2},
		{palabra: "bote", acento: 2},
		{palabra: "fútbol", acento: 2},
		{palabra: "camisa", acento: 2},
		{palabra: "fémur", acento: 2},
		{palabra: "cuaderno", acento: 2},
		{palabra: "azúcar", acento: 2},
		{palabra: "domingo", acento: 2},
		{palabra: "lápiz", acento: 2},
		{palabra: "matemáticas", acento: 3},
		{palabra: "héroe", acento: 3},
		{palabra: "tarántula", acento: 3},
		{palabra: "fantástico", acento: 3},
		{palabra: "lágrima", acento: 3},
		{palabra: "brócoli", acento: 3},
		{palabra: "cálida", acento: 3},
		{palabra: "ibérico", acento: 3},
		{palabra: "hígado", acento: 3},
		{palabra: "micrófono", acento: 3},
		{palabra: "fósforo", acento: 3},
		{palabra: "brújula", acento: 3},
		{palabra: "cráreno", acento: 3},
		{palabra: "gótico", acento: 3},
		{palabra: "número", acento: 3},
		{palabra: "círculo", acento: 3},
		{palabra: "agrícola", acento: 3},
		{palabra: "cerámica", acento: 3},
		{palabra: "mecánico", acento: 3},
		{palabra: "ángulo", acento: 3}
]
};

function devuelveURLImagen(self)
{
	var property="palabra"+self.correcta;
	return appConstants.nivel3imageURL + self[property].normalize('NFD').replace(/[\u0300-\u036f]/g, "") + ".jpg";
}
var appConstants = {
	localPermanentStorageFolder: "/sdcard/eus.ehu.intel.graphiapp/",
	localPermanentStorageFolderImg: function () {
		return this.localPermanentStorageFolder+"img/";
	},
	localPermanentStorageFolderAudio: function () {
		return this.localPermanentStorageFolder+"audio/";
	},
	
//	uploadFileURL: "http://158.227.64.57:8080/TTA1718_LS-EX_09-10S/rest/School/uploadFile", //EHU PUBLIC
//	uploadFileURL: "http://10.107.16.86:8080/TTA1718_LS-EX_09-10S/rest/School/uploadFile", //EHU WIFI
//	uploadFileURL: "http://192.168.0.38:8080/TTA1718_LS-EX_09-10S/rest/School/uploadFile" //HOME
	//serverURL : "http://192.168.0.19:8080/GraphiAppServer/",
	//serverURL : "http://192.168.0.18:8080/GraphiAppServer/",
	serverURL : "http://u017633.ehu.eus:28080/GraphiAppServer/",
	//serverURL : "http://10.109.179.85:8080/GraphiAppServer/",

	get ejerciciosNivel1URL () {
	    return this.serverURL + "rest/GraphiApp/getNivel1";
	},

	get ejerciciosNivel2URL () {
	    return this.serverURL + "rest/GraphiApp/getNivel2";
	},
	get registerUserURL(){
		return this.serverURL + "rest/GraphiApp/registerUser";
	},
	get loginUserURL(){
		return this.serverURL + "rest/GraphiApp/loginUser";
	},
	get postNivel1URL(){
		return this.serverURL + "rest/GraphiApp/postNivel1";
	},
	get postNivel2URL(){
		return this.serverURL + "rest/GraphiApp/postNivel2";
	},
	get getResultsURL(){
		return this.serverURL + "rest/GraphiApp/getResults";
	},
	get uploadFileURL(){
		return this.serverURL + "rest/GraphiApp/uploadFile";
	},
	get ejerciciosNivel2URL(){
		return this.serverURL + "rest/GraphiApp/getNivel2";
	},
	get postResultURL(){
		return this.serverURL + "rest/GraphiApp/postResult";
	},
	get registerClassURL(){
		return this.serverURL + "rest/GraphiApp/registerClass";
	},
	get imageURL(){
		return this.serverURL + "img/"
	},
	get nivel3imageURL()
	{
		return this.imageURL + "nivel3/"
	},
	get persistentStorageFolderURL()
	{
//		return cordova.file.dataDirectory;
		return cordova.file.externalDataDirectory;
	},
	get persistentStorageImageURL()
	{
		return this.persistentStorageFolderURL+"img/";
	}
};


var teacherSessionConstants = {
		nickname: "",
		tipo: 2,
		idClase: 0,
		tempPathN3: ""
		
};

var studentSessionConstants = {
		nickname: "",
		tipo: 1,
		get profilePhotoName()
		{
			return "profile_photo_" + this.nickname + ".jpg";
		},
		get profilePhotoURL()
		{
			return appConstants.persistentStorageImageURL + this.profilePhotoName;
		},
		resultados1: -1, //Resultados de nivel1
		resultados2: -1, //Resultados de nivel2
		resultados3: -1, //Resultados de nivel3
		resultados4: -1, //Resultados de nivel4
		resultados5: -1, //Resultados de nivel5
		resultados8: -1  //Resultados de nivel8
};

var fileUtilities = {
		moveAsync: function (sourceFullPath,destFolder,destName,onSuccess){
			var url="file://"+sourceFullPath;
			var destFile=destFolder+destName;
			var fileTransfer = new FileTransfer();
			fileTransfer.download(
				url,
				destFile,
				function() {
					window.resolveLocalFileSystemURL(url,
		    				function(fileEntry) {
		    					fileEntry.remove(onSuccess);
		    				},
		    				function(error) {
		    					alert("Source file NOT removed");
		    				}
		    		);			
				},
				function (error) {
					alert('File not copied. '+'error.code: '+error.code+'\nerror.source: '+error.source+'\nerror.target: '+error.target+'\nerror.http_status: '+error.http_status);
				}
			);		
		},
		uploadFileAsync: function(sourceFullPath,fileType,uploadFileServiceURL,onSuccess,onError) {

			var fileURL="file://"+sourceFullPath;
			var fileName=sourceFullPath.substring(sourceFullPath.lastIndexOf("/")+1);
			var options = new FileUploadOptions();
			options.fileKey = "file";
			options.mimeType = "multipart/form-data";
			options.fileName = fileName;
			var params = {filetype:fileType};
			options.params=params;
			
			var ft = new FileTransfer();
			ft.upload(fileURL, encodeURI(uploadFileServiceURL),
			//Subir el fichero indicado por fileURL al servicio de subida de ficheros
				function() {//función successCallback: si el fichero SÍ se subió bien
					alert("File uploaded");
					if(onSuccess!=false)
						onSuccess();
				}, 
				function(error) {//función errorCallback: si el fichero NO se subió bien
					alert("File upload ERROR: "+error.code);
					if(onError!=false)
						onError();
				}, 
				options
			);

		}
	};
var audio = {
		media:null,
		fileFolder:null,
		fileName:null,
		create: function(fileFolder,fileName) {
			this.fileFolder=fileFolder;
			this.fileName=fileName;
			if(this.media)
				this.media.release();
			this.media = new Media(this.fileFolder+this.fileName);
		},
		doStartRecord: function() {

			this.create("","tmprecording.3gp");//Crear nuevo objeto para el atributo "media", asociado al fichero "tmprecording.3gp" de la carpeta por defecto
			if(this.media) {
		        this.media.startRecord();//Comenzar a grabar con el objeto del atributo media
		    }
			else {
				alert("No media file to record");
			}
	
		},		
		doStopRecordAsync: function(fileFolder,fileName,onSuccess) {

			if(this.media) {
//				alert("doStopRecord: "+this.fileName);
		        this.media.stopRecord();//Dejar de grabar con el objeto del atributo media
		        
		        fileUtilities.moveAsync("/sdcard/tmprecording.3gp",fileFolder,fileName,
		        	function() {
			    		audio.media.release();//Liberar el objeto del atributo media
			    		audio.fileFolder=fileFolder;
			    		audio.fileName=fileName;
						if(onSuccess!=false)
							onSuccess();
		        	}
		        );
		    }
			else {
				alert("No media file to stop");
			}		
		}		
};
