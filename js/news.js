$(document).ready(function(){
	var template = $("#politicsTemplate").html();
    var renderer = Handlerbars.compile(template);
    var result = renderer({ "newsItem" : [{
     "color" : "white",
     "description" : "This is an awesome news article",
     "date" : "4/4/2014",
     "link" : "www.google.com"
     }]
    });
    
    var isRed = function() {
	  return this.get('color') === 'red';
	}.property('color');
  var isWhite = function() {
	  return this.get('color') === 'white';
	}.property('color');
  var isBlue = function() {
	  return this.get('color') === 'blue';
	}.property('color');

    
    
 


     $(".politics-toggle").click(function(){
     	if($(".politics").is(":visible")){
         $(".politics").hide();
     	} else {
     		$(".politics").show();
     	}
     });

 }); 