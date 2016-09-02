var fs = require("fs");

var encoding = "utf8";
var layout_url = "./layout/";
var file_extension = ".html"

var base_template = "base";
var header_template = "header";
var footer_template = "footer";

var base_layout = readFileSync( base_template );
var header_layout = readFileSync( header_template );
var footer_layout = readFileSync( footer_template );

function readFileSync( template_name ){
	return fs.readFileSync( 
		layout_url + template_name + file_extension, encoding );
}


module.exports = function (req, res, url_name, context){
	var content_layout = readFileSync( url_name );
	var layout;

	layout = base_layout.replace("{% header %}", header_layout);
	layout = layout.replace("{% footer %}", footer_layout);
	layout = layout.replace("{% content %}", content_layout);

	res.write( layout );
	res.end();
}