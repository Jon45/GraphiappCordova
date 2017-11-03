/**
 * 
 */
var appConstants = {
	localPermanentStorageFolder: "/sdcard/eus.ehu.intel.graphiapp/",
	localPermanentStorageFolderImg: function () {
		return this.localPermanentStorageFolder+"img/";
	},
	localPermanentStorageFolderAudio: function () {
		return this.localPermanentStorageFolder+"audio/";
	},
	localPermanentStorageFolderVideo: function () {
		return this.localPermanentStorageFolder+"video/";
	},
//	uploadFileURL: "http://158.227.64.57:8080/TTA1718_LS-EX_09-10S/rest/School/uploadFile", //EHU PUBLIC
//	uploadFileURL: "http://10.107.16.86:8080/TTA1718_LS-EX_09-10S/rest/School/uploadFile", //EHU WIFI
//	uploadFileURL: "http://192.168.0.38:8080/TTA1718_LS-EX_09-10S/rest/School/uploadFile" //HOME
};