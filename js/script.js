'use strict';

var PastEvents = {
	truth: {
		date: 'November 5, 2014',
		place: 'Neuehouse, New York City',
		paraOne: 'Tell the truth, the whole truth, and nothing but the truth. But whose truth are we talking about?',
		paraTwo: '<i>Creative Tensions: Truth</i> brought together playwright Lisa Kron and Occupy activist Jeremy Varon to examine our personal truths about money, labels, inspiration, and courage.'
	},
	sex: {
		date: 'June 8, 2015',
		place: '501 Union, Brooklyn',
		paraOne: 'Birds do it, bees do it. It’s arguably the most universal human activity. Yet rarely can we talk about sex candidly and openly.',
		paraTwo: '<i>Creative Tensions: Sex</i> brought together performance artist and Taylor Mac (Hir, The Lily’s Revenge) and pioneering pornographer Angie Rowntree (Sssh.com) to examine sexuality, gender, societal norms, and personal proclivities.'	
	},
	action: {
		date: 'August 28, 2015',
		place: 'Livestream Public, Brooklyn',
		paraOne: 'What is more important to action – the intention or the outcome? How do we decide to take action, and who do we take action for?',
		paraTwo: '<i>Creative Tensions: Action</i> brought together theater director Lisa Peterson (An Iliad, The Patron Saint of Sea Monsters) and constitutional lawyer Purvi Shah (Center for Constitutional Rights) to examine our attitudes on risk, altruism, objectives, & hope.'	
	},
	americandream: {
		date: 'December 2, 2015',
		place: 'Civic Hall, New York City',
		paraOne: 'What comes to mind when you hear the phrase "American Dream"? Is it at risk or on the rise?  Is it for everyone or only for some?',
		paraTwo: '<i>Creative Tensions: American Dream</i> brought together sharing economy pioneer Shelby Clark (CEO, peers.org) and social justice comedian Negin Farsad (The Muslims Are Coming!) to examine the underpinnings of the iconic national narrative of a better future.<br><br><i>Creative Tensions: American Dream</i> was remounted on September 28, 2017 at Washington Ideas Week in Washington, D.C. with Executive Editor of The Atlantic Matt Thompson.'	
	},
	home: {
		date: 'March 26, 2016',
		place: 'New York Live Arts, New York City',
		paraOne: 'What is home? Is it a place, a feeling, an identity? Is it safety or belonging? Does it come with us when we move or do we leave it behind?',
		paraTwo: '<i>Creative Tensions: Home</i> brought together Iranian-born artist and filmmaker Shirin Neshat and President & CEO of the American Refugee Committee Daniel Wordsworth to examine our notions of where we belong and why.<br><br><i>Creative Tensions: Home</i> was remounted on March 25, 2017 in Washington, D.C. with playwright Raeda Taha and Alex Aleinikoff, Senior Fellow of The Migration Insitute.<br><br><i>Creative Tensions: Home</i> was also remounted in partnership with Orient Productions (Cairo, Egypt) and Arab Arts Focus​ at the Edinburgh Festival in August 22, 2017, with Hanane Hajj Ali (Lebanese artist and activist), Alison Phipps (Glasgow Refugee Asylum and Migration Network), and moderated by Philip Himberg (Artistic Director, Sundance Institute Theatre Program).</p>'
	},
	empathy: {
		date: 'January 27, 2017',
		place: 'Sundance Film Festival, Park City, UT',
		paraOne: 'In these divisive times, can art really make people more tolerant and empathetic? Is it even possible to feel empathy for those with whom we don’t share core values? Where do you stand on the purpose of art?',
		paraTwo: '<i>Creative Tensions: Empathy</i> brought together author Anand Giridharadas and actor, director, and producer Gael García Bernal to examine our notions of how we say we care for others and why.'	
	},
	connection: {
		date: 'February 1, 2017',
		place: 'NPR Headquarters, Washington, D.C.',
		paraOne: 'Can we heal ourselves through connection? Can dialogue be a new kind of medicine, a cure for social isolation? In a world that feels increasingly fraught and fractured, how might we rise above fear and forge community to move forward?',
		paraTwo: '<i>Creative Tensions: Connection</i> brought together U.S. Surgeon General Vivek H. Murthy and Shankar Vedantam, host of NPR&#8217s Hidden Brain podcast, to examine the opposing forces that shape our communities and well-being. <p><br><i>Creative Tensions: Connection</i> was remounted on June 23, 2017 at the Aspen Ideas Festival with the 19th Surgeon General Vivek H. Murthy, Julianne Holt-Lunstad, Professor of Psychology and Neuroscience at Brigham Young University, and Casper ter Kuile, Ministry Innovation Fellow at Harvard Divinity School.</p>'	
	},
	voice: {
		date: 'June 27, 2017',
		place: 'Aspen Ideas Festival, Aspen, CO',
		paraOne: 'Has America lost its voice? For better or worse, our policies, protests, and pop culture have traditionally had deep impact both abroad and at home. Do the voices we elevate today amount to a collective identity? Should they? Who lays claim to America’s voice and what happens to the voiceless?',
		paraTwo: '<i>Creative Tensions: Voice</i> brought together Yosimar Reyes, poet, performance artist, and Arts Fellow at Define American, and Aspen attendees to examine the opposing forces that shape America&#8217s voice.'	
	},
	responsibility: {
		date: 'June 29, 2017',
		place: 'Aspen Ideas Festival, Aspen, CO',
		paraOne: 'Who am I responsible for? Looking out for one’s neighbor once formed the basis of our social contract. Today, as political and cultural identities harden, our responsibilities to one another and the world seem in question. What do we gain from a shared identity? What do we lose by becoming a tribe of tribes?',
		paraTwo: '<i>Creative Tensions: Responsibility</i> brought together Heidi Beirich of the Southern Poverity Law Center, Nate Bowling, high school educator and finalist for 2016 National Teacher of the Year, and award-winning playwright Brandon Jacobs-Jenkins to examine the opposing forces that shape our sense of duty to each other.'	
	},
};

var UI = {
	provocation: $('#provocation'),
	provocationLeft: $('#provocation_left'),
	provocationRight: $('#provocation_right')
};

var tensions = [];

function Tension(question, from, to) {
	this.question = question;
	this.from = from;
	this.to = to;
}

tensions.push(new Tension('What inhibits our sexual lives more?', 'Government & Society', 'Self'));
tensions.push(new Tension('Which is more important for the American worker?', 'Flexibility', 'Security'));
tensions.push(new Tension('How does money impact your work?', 'Enables', 'Complicates'));
tensions.push(new Tension('Are you aware of how you express your gender?', 'It’s top of mind', 'I don’t think about it'));
tensions.push(new Tension('The most powerful actions are taken on behalf of...', 'Oneself', 'Others'));
tensions.push(new Tension('The American Dream is...', 'At Risk', 'On the rise'));
tensions.push(new Tension('I am more at home with...', 'My given family', 'My chosen family'));
tensions.push(new Tension('Film and theatre should...', 'Unite us', 'Disrupt us'));
tensions.push(new Tension('I want my leaders to demonstrate...', 'Grace', 'Resolve'));


var cycleTensions = function() {
	var count = 0;
	setInterval(function() {
		if(count === tensions.length) {
			count = 0;
		}
		$('.interactive-info').fadeIn(200);

		UI.provocation.html(tensions[count].question);
		UI.provocationLeft.html(tensions[count].from);
		UI.provocationRight.html(tensions[count].to);
		count++;

		setTimeout(function(){
			$('.interactive-info').fadeOut(200);
		}, 4800);
	}, 5000);
};

var renderPastEvent = function(pastEvent) {
	$('#pastEventDate').html(pastEvent.date);
	$('#pastEventPlace').html(pastEvent.place);
	$('#pastEventParaOne').html(pastEvent.paraOne);
	$('#pastEventParaTwo').html(pastEvent.paraTwo);
};

var checkAndToggleBg = function() {
	if ($(window).scrollTop() > 200) {
	  $('header').addClass('fade-in-bg');
	}
	else {
	  $('header').removeClass('fade-in-bg');
	}
};

var bindEvents = function (){
	$(window).on('scroll', function() {
		checkAndToggleBg();
	});

	$('.past-event').on('click', function() {
		var eventFromClick = $(this).attr('data-pastevent');
		var thisEvent = PastEvents[eventFromClick];
		$('.past-event').removeClass('selected');
		$(this).addClass('selected');
		renderPastEvent(thisEvent);
	});

	// $('.past-list .past-event').mouseover(function() {
	//     $('.past-description').hide().filter('#past-' + this.id).show();
	// });

	// $('.past-list .past-event').mouseout(function() {
	// 	$('.past-description').hide().filter('#past-' + this.id).hide();
	// });
};

$('#submit').on('click', function (event) {
	event.preventDefault();
	event.returnValue = false;
	console.log('click');
	$.ajax({
	    type: 'POST',
	    url: 'send_form_email.php',
	    data: {email: $('#email').val()},
	    success: function(res) {
	    	console.log(res);
	        if (res === 'successful') {
	        	console.log('i am successful');
	            $('.submit-status').html('Thanks for signing up!');
	        }
	        else {
	            $('#submit-status').html('Sorry, submission failed.');
	        } 
	    },
	    error: function () {
	        $('#submit-status').html('Sorry, submission failed.');
	    }
	});
});

$(document).ready(function() {
	bindEvents();
	cycleTensions();
	renderPastEvent(PastEvents.truth);
});