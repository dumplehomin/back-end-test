var http = require("http");
var router = require("./router");

http.createServer(function( request, response ){
	router( request, response );
}).listen( 3030, function(){
	console.log("서버 구동");
});