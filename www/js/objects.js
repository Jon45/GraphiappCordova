var nivel1 = {
		correctas : 0,
		total : 0,
		palabras : [],
		puntuacion: 0,
		index : 0
};

var nivel2 = {
		correctas : 0,
		total : 0,
		palabras : [],
		puntuacion: 0,
		index : 0
};

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
	serverURL : "http://192.168.0.19:8080/GraphiAppServer/",
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
	nickname : "jon"
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
