var express = require("express");
var router = express.Router();
var marked = require("marked");
var fs = require("fs");

// marked 选项配置
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: true,
	pedantic: false,
	sanitize: false, //false 不解析html、js，直接运行js
	smartLists: true,
	smartypants: false
});

/* GET home page. */
router.get("/", function(req, res, next) {
	fs.readFile("markdown/README.md", function(err, data) {
		var html = marked(data.toString());
		res.render("index", {mdContent: html});
	});
});

module.exports = router;
