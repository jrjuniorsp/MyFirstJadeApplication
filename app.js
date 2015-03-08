var express = require("express");
var app = express();

app.set("view engine","jade");
app.set("view options",{layout : true});
app.set("views", __dirname + "/views");

app.get("/hello", function(request, response) {
	response.render("index");
});

app.get("/heroes/list", function(request, response) {
	var heroes = ["Batman","Super Man","Iron Man"];
	response.render("heroes", {heroes: heroes});
});

app.listen(8888);
console.log("Server started on port 8888");