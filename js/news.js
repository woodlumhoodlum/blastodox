$(document).ready(function() {
	//register helpers
	Handlebars.registerHelper("isRed", function(newsItem){
		if(newsData.color==='red'){
			return true;
		} else {
			return false;
		}
		
	});
	Handlebars.registerHelper("isWhite", function(newsItem){
		if(newsData.color==='white'){
			return true;
		} else {
			return false;
		}
		
	});
	Handlebars.registerHelper("isBlue", function(newsItem){
		if(newsData.color==='blue'){
			return true;
		} else {
			return false;
		}
		
	});

	var template = $("#politicsTemplateRed").html();
	var renderer = Handlebars.compile(template);
	var result = renderer({
		"newsItem" : [{
			"color" : "red",
			"description" : "This is an awesome news article",
			"date" : "4/4/2014",
			"link" : "www.google.com"
		}, {
			"color" : "white",
			"description" : "This is an awesome news article",
			"date" : "4/4/2014",
			"link" : "www.google.com"
		}, {
			"color" : "blue",
			"description" : "This is an awesome news article",
			"date" : "4/4/2014",
			"link" : "www.google.com"
		}]
	});

	$("#containerRed").html(result);

	var template = $("#politicsTemplateWhite").html();
	var renderer = Handlebars.compile(template);
	var result = renderer({
		"newsItem" : [{
			"color" : "red",
			"description" : "This is an awesome news article",
			"date" : "4/4/2014",
			"link" : "www.google.com"
		}, {
			"color" : "white",
			"description" : "This is an awesome news article",
			"date" : "4/4/2014",
			"link" : "www.google.com"
		}, {
			"color" : "blue",
			"description" : "This is an awesome news article",
			"date" : "4/4/2014",
			"link" : "www.google.com"
		}]
	});

	$("#containerWhite").html(result);

	var template = $("#politicsTemplateBlue").html();
	var renderer = Handlebars.compile(template);
	var result = renderer({
		"newsItem" : [{
			"color" : "red",
			"description" : "This is an awesome news article",
			"date" : "4/4/2014",
			"link" : "www.google.com"
		}, {
			"color" : "white",
			"description" : "This is an awesome news article",
			"date" : "4/4/2014",
			"link" : "www.google.com"
		}, {
			"color" : "blue",
			"description" : "This is an awesome news article",
			"date" : "4/4/2014",
			"link" : "www.google.com"
		}]
	});

	$("#containerBlue").html(result);
	$(".politics-toggle").click(function() {
		if ($(".politics").is(":visible")) {
			$(".politics").hide();
		} else {
			$(".politics").show();
		}
	});

});

