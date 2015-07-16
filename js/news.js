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
			"description" : "Four American hostages in Iran left out to dry.",
			"date" : "",
			"link" : "http://www.thedailybeast.com/cheats/2015/07/15/obama-rips-jab-on-u-s-hostages-in-iran.html"
		}, {
			"color" : "red",
			"description" : "Let's troll ISIS!!!",
			"date" : "4/4/2014",
			"link" : "http://gizmodo.com/government-resarcher-explains-how-to-defeat-isis-with-t-1718072572"
		}, {
			"color" : "red",
			"description" : "Ruger SR-556 Takedown is damn sexy",
			"date" : "4/4/2014",
			"link" : "http://www.ruger.com/products/sr556TD/models.html"
		}, {
			"color" : "red",
			"description" : "Fox limits GOP debate down to top 10 candidates",
			"date" : "4/4/2014",
			"link" : "http://hosted.ap.org/dynamic/stories/U/US_GOP_2016_DEBATES?SITE=AP&SECTION=HOME&TEMPLATE=DEFAULT&CTIME=2015-07-15-13-01-03"
		}]
	});
	$("#containerRed").html(result);

	var template = $("#politicsTemplateWhite").html();
	var renderer = Handlebars.compile(template);
	var result = renderer({
		"newsItem" : [{
			"color" : "blue",
			"description" : "The Cascadia plate is an orca, and Oregon's coast is a splash zone.",
			"date" : "",
			"link" : "http://www.newyorker.com/magazine/2015/07/20/the-really-big-one"
		}, {
			"color" : "blue",
			"description" : "These are the cool DARPA projects you're tax dollars are funding! :)",
			"date" : "",
			"link" : "http://www.darpa.mil/our-research?ppl=viewall&tFilter=&oFilter=3&sort=undefined"
		}, {
			"color" : "blue",
			"description" : "Latest Election Polls",
			"date" : "",
			"link" : "http://www.realclearpolitics.com/epolls/latest_polls/"
		}]
	});
	$("#containerWhite").html(result);

	var template = $("#politicsTemplateBlue").html();
	var renderer = Handlebars.compile(template);
	var result = renderer({
		"newsItem" : [{
			"color" : "blue",
			"description" : "Global cooling? Not really.",
			"date" : "",
			"link" : "http://io9.com/no-we-aren-t-heading-into-a-mini-ice-age-1717779657"
		}, {
			"color" : "blue",
			"description" : "Trumps net worth is almost as delusional as his hair",
			"date" : "",
			"link" : "http://www.nytimes.com/politics/first-draft/2015/07/15/donald-trump-says-hes-worth-more-than-10-billion/?_r=0"
		}, {
			"color" : "blue",
			"description" : "Marco Rubio misses most Senate votes... (why is he my favorite again?)",
			"date" : "",
			"link" : "http://www.nytimes.com/politics/first-draft/2015/07/15/marco-rubio-has-missed-most-votes-this-year-of-senators-running-for-president/"
		}, {
			"color" : "blue",
			"description" : "Scott Walker pussyfoots in SC",
			"date" : "",
			"link" : "http://www.nytimes.com/politics/first-draft/2015/07/15/marco-rubio-has-missed-most-votes-this-year-of-senators-running-for-president/"
		}, {
			"color" : "blue",
			"description" : "HPV Vaccs for kids only in 2 states",
			"date" : "",
			"link" : "http://throb.gizmodo.com/disturbing-news-only-two-us-states-require-hpv-vaccina-1717996967"
		}]
	});
	$("#containerBlue").html(result);
	
	var template = $("#popTemplateTech").html();
	var renderer = Handlebars.compile(template);
	var result = renderer({
		"newsItem" : [{
			"color" : "",
			"description" : "StrongLoop can get you RESTful right quick",
			"date" : "",
			"link" : "https://www.youtube.com/watch?v=wW_jSwVcXuM"
		}, {
			"color" : "",
			"description" : "Pluto pics",
			"date" : "",
			"link" : "http://www.thedailybeast.com/cheats/2015/07/15/new-horizons-beams-back-new-pluto-pics.html"
		}, {
			"color" : "",
			"description" : "Beautifully written Functional Javascript Guide!",
			"date" : "",
			"link" : "https://github.com/DrBoolean/mostly-adequate-guide"
		}, {
			"color" : "blue",
			"description" : "Snap.svg: sik little js library for animating svgs that I wanna use on my home page",
			"date" : "",
			"link" : "http://snapsvg.io/"
		}]
	});
	$("#containerTech").html(result);
	
	var template = $("#popTemplateMedia").html();
	var renderer = Handlebars.compile(template);
	var result = renderer({
		"newsItem" : [{
			"color" : "",
			"description" : "Game Reeview: Overture",
			"date" : "",
			"link" : "http://www.ign.com/blogs/djmmt/2015/07/15/overture-review-72"
		}, {
			"color" : "blue",
			"description" : "Method Man is pro-jokes",
			"date" : "",
			"link" : "http://hiphopdx.com/news/id.34659/title.method-man-on-wu-tang-clan-we-needed-a-jokester"
		}, {
			"color" : "blue",
			"description" : "Petestrumentals 2 review (I quite like it, it inspired me to literally write a regae song)",
			"date" : "",
			"link" : "http://hiphopdx.com/reviews/id.2491/title.pete-rock-petestrumentals-2"
		}, {
			"color" : "blue",
			"description" : "Chris Brown cries everytime he hears Rittz sing: 'Call 911, you about to be the victim of a home invasion'",
			"date" : "",
			"link" : "http://hiphopdx.com/news/id.34663/title.chris-brown-victim-of-home-invasion"
		}]
	});
	$("#containerMedia").html(result);
	
	var template = $("#popTemplateRandom").html();
	var renderer = Handlebars.compile(template);
	var result = renderer({
		"newsItem" : [{
			"color" : "blue",
			"description" : "Become a doggy chew toy!",
			"date" : "",
			"link" : "http://indefinitelywild.gizmodo.com/what-it-s-like-to-be-attacked-by-an-attack-dog-1717766828"
		}, {
			"color" : "blue",
			"description" : "How many puffy cloudies to stop Cali's wawa thirst?",
			"date" : "",
			"link" : "http://gizmodo.com/how-much-rain-would-end-the-drought-1717753734"
		}, {
			"color" : "blue",
			"description" : "What to do when you lose your job",
			"date" : "",
			"link" : "http://twocents.lifehacker.com/what-to-do-about-debt-when-you-ve-lost-your-job-1717617977"
		}, {
			"color" : "blue",
			"description" : "Stop talking like a Valley Girl!!!",
			"date" : "",
			"link" : "http://lifehacker.com/avoid-uptalk-to-communicate-with-more-confidence-1717613545"
		}, {
			"color" : "blue",
			"description" : "5 top skills employers are lookin' for",
			"date" : "",
			"link" : "http://lifehacker.com/the-top-5-job-skills-employers-are-looking-for-1718019990"
		}]
	});
	$("#containerRandom").html(result);
	
		var template = $("#financeTemplate").html();
		var renderer = Handlebars.compile(template);
		var result = renderer({
			"newsItem" : [{
				"color" : "",
				"description" : "Greece passes Austerity Bill",
				"date" : "",
				"link" : "http://hosted.ap.org/dynamic/stories/E/EU_GREECE_BAILOUT_THE_LATEST?SITE=AP&SECTION=HOME&TEMPLATE=DEFAULT&CTIME=2015-07-15-19-04-27"
			}]
		});
	$("#containerFinance").html(result);
	
	$(".politics-toggle").click(function() {
		if ($(".politics").is(":visible")) {
			$(".politics").hide();
		} else {
			$(".politics").show();
		}
	});

});

