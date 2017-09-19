/* Get home page */
module.exports.homelist = function(req, res){
  //o primeiro parametro de res.render é nome do arquivo de template a usar ->'locations-list'
  // o segundo parametro de res.render é o objetvo JS contendo os dados que o template vai usar.
    res.render('locations-list', {
    	title : 'Loc8r - find a place to work with wifi',
    	pageHeader : {
    		title : 'Loc8r',
    		strapline : 'Find places to work with wifi near you!!!'
    	},

    	sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffe, cake or a pint? Let Loc8r help you find the place you're looking for.",

    	locations : [{
    		name: 'Starcup',
    		address: '125 High Street, Reading, RG6 01PS',
    		rating: 5,
    		facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
    		distance: '100m'
    	},{
    		name: 'Pipus Burger',
    		address: '150 High Street, Reading, RG6 96PS',
    		rating: 4,
    		facilities: ['Food', 'Premium Wifi'],
    		distance: '200m'
    	},{
    		name: 'Lanche do Ze',
    		address: '196 High Street, Reading, RG6 15PS',
    		rating: 3,
    		facilities: ['Hot Drinks', 'Premium Wifi'],
    		distance: '210m'
    	}]
    });
};

/* Get locations info page */
module.exports.locationInfo = function(req, res){
    res.render('location-info', {
    	title : '*Starcups*',
    	pageHeader: {title: 'Starcups'},
    	sidebar: {
    		context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get somw work done.',
    		callToAction: 'If you\'ve been and you like it - or you don\'t - please leave a review to help other people just like you.'

    	},

    	location: {
    		name: 'Starcup',
    		address: '125 High Street, Reading, RG6 01PS',
    		rating: 4,
    		facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
    		coords: {lat: 51.455041, lng: -0.9690884},
    		openingTimes: [{
    			days: 'Monday - Friday',
    			opening: '7:00am',
    			closing: '7:00pm',
    			closed: false
    		},{
    			days: 'Sartuday',
    			opening: '8:00am',
    			closing: '5:00pm',
    			closed: false
    		},{
    			days: 'Sunday',
    			closed: false
    		}],

    		reviews: [{
    			author: 'Diego Coutinho',
    			rating: 5,
    			timestamp: '16 July 2017',
    			reviewText: 'What a great place. I can\'t say enough good things about it.'
    		},{
    			author: 'Mariana Rosa',
    			rating: 3,
    			timestamp: '18 July 2017',
    			reviewText: 'It was ok. Coffe wasn\'t great, but the wifi was fast.'
    		}]
    	}

    });
};

/* Get Add review page */
module.exports.addReview = function(req, res){
    res.render('location-review-form', {
    	title : 'Review Starcups on Loc8r',
    	pageHeader: {title: 'Review Starcups'},
    });
};
