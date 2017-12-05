
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
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
        var lastLoginUser = localStorage.getItem("lastLoginUsed");
        if (lastLoginUser!=null)
        {
            var currentLogin=JSON.parse(lastLoginUser);
            if(currentLogin.tipo==1){
            	studentSessionConstants = currentLogin;
            	location.href="#userHome";
            }
            else{
            	teacherSessionConstants = currentLogin;
            	location.href="#homePage";
            }
        }
        cargarDatosNiveles();
    }
};

app.initialize();

$(document).on("pagecontainershow", function (event,ui) {
	pageId = $('body').pagecontainer('getActivePage').prop('id');
});
$(document).ready(function(){
	$("#teacherPanel").enhanceWithin().panel();
	$("#studentPanel").enhanceWithin().panel();
});

$("#boton-modo-individual").click(function() {
	comenzarModoIndividual();
});

$("#boton-clase-virtual").click(function() {
	comenzarClaseVirtual();
});

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

$("#nivel2-audio").click(function() {
	nivel2_playAudio();
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

$("#botonNivel4").click(function () {
	nivel4_start();
});

$("#botonNivel5").click(function () {
	nivel5_start();
});

$("#botonNivel8").click(function () {
	nivel8_start();
});

$(".draggable").draggable({
	revert : "valid",
	containment : "#containment"
});

$("#nivel8-caja-agudas").droppable({
	drop: function (event,ui)
	{
		var tipoPalabra = $(ui.draggable).attr("acento");
		nivel8_check_palabra(tipoPalabra,1);
		$(ui.draggable).css("visibility","hidden");
	}
});

$("#nivel8-caja-llanas").droppable({
	drop: function (event,ui)
	{
		var tipoPalabra = $(ui.draggable).attr("acento");
		nivel8_check_palabra(tipoPalabra,2);
		$(ui.draggable).css("visibility","hidden");
	}
});

$("#nivel8-caja-esdrujulas").droppable({
	drop: function (event,ui)
	{
		var tipoPalabra = $(ui.draggable).attr("acento");
		nivel8_check_palabra(tipoPalabra,3);
		$(ui.draggable).css("visibility","hidden");
	}
});

$("#regBtn").click(function (){
	regNewUser();
});
$("#loginBtn").click(function(){
	logUser();
});

$("#botonPerfil").click(function()
{
	introducirDatosPerfil();
});

$("#menu-profile").click(function()
{
	introducirDatosPerfil();
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
$("#btnSubmit1").click(function(){
	addN1();
});
$("#btnSubmit4").click(function(){
	addN4();
});
$("#classBegin").click(function(){
	addClass();
});
$("#btnSubmit5").click(function(){
	addN5();
});
$("#btnSubmit8").click(function(){
	addN8();
});
$("#filePicker").change(function(event){
	var tmppath = URL.createObjectURL(event.target.files[0]);
	teacherSessionConstants.tempPathN3 = tmppath;
});
$("#menu-logout-s").click(function(){
	logout();
});
$("#menu-logout-t").click(function(){
	logout();
});
$("[id|='classBtn']").click(function(){
	var tematica = $(this).html();
	listResults(tematica);
});
