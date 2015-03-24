
exports.homelist = function(request, response) {
  response.render('locations-list', { title: 'Loc8r - find a place to work with wifi',
  	pageHeader: { 
  		title: 'Loc8r', 
  		strapline: 'Find places to work with wifi near you!' 
  	},
  	sidebar: "Looking for wifi and a seat? Loc8r can help you find places to work when out and about. Perhaps with coffee, cake or a tea? Let Loc8r help you find the place you're looking for.",
  	locations: [
  		{ 
  			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
        	facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        	distance: '100m'
		},
		{
			name: 'Cafe Hero',
			address: '125 High Street, Reading, RG6 1PS', 
			rating: 4,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'], 
			distance: '200m'
		},
		{
			name: 'Burger Queen',
			address: '125 High Street, Reading, RG6 1PS', 
			rating: 2,
			facilities: ['Food', 'Premium wifi'],
			distance: '250m'
       }]
  });
};

exports.locationInfo = function(request, response) {
  response.render('location-info', { title: 'Location Info',
  	location: {
  		name: 'Starcups',
  		rating: 3,
  		address: '125 High Street, Reading, RG6 1PS',
  		facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  		hours: ['Monday - Friday : 7.00am - 7.00pm', 'Saturday : 8.00am - 5.00pm', 'Sunday : closed'],
  		coords: {lat: '51.455041', lng: '-0.9690884'},
  		reviews: [
  			{
  				rating: 5,
  				author: 'Bugs Bunny',
  				timestamp: '16 July 2013',
  				content: "What a great place. I can't say enough good things about it."
  			},
  			{
  				rating: 3,
  				author: 'Miss Piggy',
  				timestamp: '16 June 2013',
  				content: "Stricly OK. Coffee wasn't that great but the place has great wifi and seating."
  			}
  		],
  		sidebar: {
  			lead: "Simon's cafe is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done. ",
  			minorLead: "If you've been and you like it - or if you don't - please leave a review to help other people just like you."
  		}
  	}
  });
};

exports.addReview = function(request, response) {
  response.render('location-review-form', { title: 'Review Starcups on Loc8r',
		pageHeader: {
			title: 'Review Starcups'
		},
		user: {
			displayName: 'Sonya Chhabra'
		}
	});
};