var renderer = require("./renderer");

module.exports = function( req, res ){
	var request_url = req.url.replace("/", "");
	
	if( request_url.length > 0 ){
		return renderer( req, res, request_url, {} );
	}else {
		return renderer( req, res, "home", {} );
	}
}