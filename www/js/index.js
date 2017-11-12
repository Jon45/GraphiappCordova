
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        $("#foto_perfil").attr("src",cordova.file.externalDataDirectory + "img/profile_photo.jpg");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
    }
};

app.initialize();

$(document).on("pagecontainershow", function (event,ui) {
	pageId = $('body').pagecontainer('getActivePage').prop('id');
})

$("#botonNivel1").click(function () {
	nivel1_start();
});
$("#nivel1-palabra-1").click(function () {
	nivel1_check_word(1);
});
$("#nivel1-palabra-2").click(function () {
	nivel1_check_word(2);
});

$("#botonNivel2").click(function () {
	nivel2_start();
});

$("#botonNivel3").click(function () {
	nivel3_start();
});
$("#nivel3-palabra-1").click(function () {
	nivel3_check_word(1);
});
$("#nivel3-palabra-2").click(function () {
	nivel3_check_word(2);
});

$("#regBtn").click(function (){
	regNewUser();
});
$("#loginBtn").click(function(){
	logUser();
});

$("#foto_perfil").click(function()
{
	modificar_foto_perfil();
});

$("#pn3Btn").click(function(){
	addN3();//Por definir
});
$("#audioN2R").click(function(){
	startAudioRecord();
});
$("#audioN2S").click(function(){
	stopAudioRecord();
});
$("#btnSubmit2").click(function(){
	addN2();
});
$("#classBegin").click(function(){
	addClass();
});
