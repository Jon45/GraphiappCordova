var nivel1 = {
		correctas : 0,
		total : 0,
		palabras : [],
		puntuacion: -1,
		index : 0
};

var nivel2 = {
		correctas : 0,
		total : 0,
		palabras : [],
		puntuacion: -1,
		index : 0
};

var nivel3 = {
		correctas : 0,
		total : 0,
		palabras : [],
		puntuacion: -1,
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
	puntuacion: -1,
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
	puntuacion : -1
};

var nivel8 = {
	puntuacion : -1
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
	//serverURL : "http://192.168.0.16:8080/GraphiAppServer/",
	//serverURL : "http://192.168.0.19:8080/GraphiAppServer/",
	serverURL : "http://10.109.179.85:8080/GraphiAppServer/",

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
		return this.ServerURL + "rest/GraphiApp/registerClass";
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

var sessionConstants = {
		nickname: "",
		idClase: 0,
		get profilePhotoName()
		{
			return "profile_photo_" + this.nickname + ".jpg";
		},
		get profilePhotoURL()
		{
			return appConstants.persistentStorageImageURL + this.profilePhotoName;
		}
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
