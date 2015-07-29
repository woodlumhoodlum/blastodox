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
			"description" : "Scott Walker on Abortion",
			"date" : "",
			"link" : "http://www.ijreview.com/2015/07/372343-scott-walker-signs-bill-banning-abortion-wisconsin-20-weeks-sign-nation/?utm_source=facebook&utm_medium=Partners&utm_term=PRM7&utm_campaign="
		},{
			"color" : "red",
			"description" : "Obama still wants our guns. Good thing I own stock. Literally, thanks Obama.",
			"date" : "",
			"link" : "http://www.washingtontimes.com/news/2015/jul/27/obama-pushing-for-largest-gun-grab-in-american-his/?cache"
		},{
			"color" : "red",
			"description" : "U.S. leaders surprised by Iran still wishing them death after Nuke deal. smh",
			"date" : "",
			"link" : "https://ca.news.yahoo.com/u-disturbed-iranian-leaders-criticism-deal-121454843--finance.html"
		},{
			"color" : "red",
			"description" : "Review of Ruger Precision Rifle. 1600yds for a lil over a G.",
			"date" : "",
			"link" : "http://www.realguns.com/articles/726.htm"
		},{
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
			"color" : "white",
			"description" : "Harvesting Organs pre-death",
			"date" : "",
			"link" : "http://aeon.co/magazine/philosophy/we-should-harvest-organs-from-patients-before-death/"
		},{
			"color" : "white",
			"description" : "USS Zumwalt",
			"date" : "",
			"link" : "http://www.popsci.com/future-war-new-ships-will-determine-control-contested-waters"
		},{
			"color" : "white",
			"description" : "The Cascadia plate is an orca, and Oregon's coast is a splash zone.",
			"date" : "",
			"link" : "http://www.newyorker.com/magazine/2015/07/20/the-really-big-one"
		}, {
			"color" : "white",
			"description" : "These are the cool DARPA projects you're tax dollars are funding! :)",
			"date" : "",
			"link" : "http://www.darpa.mil/our-research?ppl=viewall&tFilter=&oFilter=3&sort=undefined"
		}, {
			"color" : "white",
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
			"description" : "Jerry Brown: Extinction",
			"date" : "",
			"link" : "http://www.sacbee.com/news/politics-government/capitol-alert/article27998554.html"
		},{
			"color" : "blue",
			"description" : "Exploring desalinization in Cali",
			"date" : "",
			"link" : "http://www.newyorker.com/tech/elements/can-desalination-counter-the-drought"
		},{
			"color" : "blue",
			"description" : "Cincinnati: Another unarmed victim of police shooting",
			"date" : "",
			"link" : "http://www.cnn.com/2015/07/21/us/cincinnati-police-shooting/index.html"
		},{
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
			"description" : "Powerful women in tech from the get go. Pretty inspiring.",
			"date" : "",
			"link" : "http://www.fastcompany.com/3047428/how-two-bored-1970s-housewives-helped-create-the-pc-industry"
		},{
			"color" : "",
			"description" : "Great Data Science Tutorial, also teaches python free",
			"date" : "",
			"link" : "http://dataquest.io"
		},{
			"color" : "",
			"description" : "Tesla hits top 13 fastest Production cars when Ludicrous mode hits",
			"date" : "",
			"link" : "https://en.wikipedia.org/wiki/List_of_fastest_production_cars_by_acceleration"
		},{
			"color" : "",
			"description" : "HACKERS CAN WIRELESSLY SHUTDOWN CARS WITH UCONNECT!",
			"date" : "",
			"link" : "http://www.wired.com/2015/07/hackers-remotely-kill-jeep-highway/"
		},{
			"color" : "",
			"description" : "Video games: implementing quick soft ray traced shadows",
			"date" : "",
			"link" : "http://blog.imgtec.com/multimedia/implementing-fast-ray-traced-soft-shadows-in-a-game-engine"
		},{
			"color" : "",
			"description" : "Fun Node.js/mongodb/socketio app tutorial",
			"date" : "",
			"link" : "http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/"
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
			"description" : "Ghostface Killah hits back heavy at Action Bronson over comments",
			"date" : "",
			"link" : "https://www.youtube.com/watch?v=z93IaKPY_Wc"
		},{
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
			"color" : "",
			"description" : "OG Tech Casino Hustler",
			"date" : "",
			"link" : "http://gizmodo.com/casinos-and-con-men-the-hustler-origins-of-wearable-co-1718085809"
		},{
			"color" : "",
			"description" : "Super Humans!",
			"date" : "",
			"link" : "http://www.bloomberg.com/news/articles/2015-07-22/these-superhumans-are-real-and-their-dna-could-be-worth-billions"
		},{
			"color" : "",
			"description" : "Intriguing billion dollar bank robbery",
			"date" : "",
			"link" : "http://www.bbc.com/news/magazine-33166383"
		},{
			"color" : "",
			"description" : "Those pet tick cards are obviously fake",
			"date" : "",
			"link" : "http://www.tetherdcow.com/another-science-experiment/"
		},{
			"color" : "",
			"description" : "Massless particle found",
			"date" : "",
			"link" : "http://www.princeton.edu/main/news/archive/S43/64/59M11/index.xml"
		},{
			"color" : "blue",
			"description" : "Breakin' up hearts your brain :(",
			"date" : "",
			"link" : "http://throb.gizmodo.com/heres-what-breaking-up-does-to-your-brain-1717776450"
		},{
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
				"description" : "Dividend growth investors need to stay vigilent",
				"date" : "",
				"link" : "http://seekingalpha.com/article/3360225-retired-dividend-growth-investors-are-lulled-into-a-false-sense-of-security"
			},{
				"color" : "",
				"description" : "mREIT with 29.4% yield",
				"date" : "",
				"link" : "http://seekingalpha.com/article/3363915-whats-wrong-with-the-mreits-morl-now-yields-29_4-percent"
			},{
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

