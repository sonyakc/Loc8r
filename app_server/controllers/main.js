
/*
 * GET home page.
 */

exports.about = function(request, response) {
  response.render('generic-text', { title: 'About', content: 'Loc8r was created to help people find places to sit down and a bit of work done.' });
};

exports.signin = function(request, response) {
	response.render('signin-index', { title: 'Sign in to Loc8r',
	images: [
		{ src: '/images/signin-twitter.png' },
		{ src: '/images/signin-facebook.png' }
	]});
};