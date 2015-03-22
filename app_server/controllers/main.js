
/*
 * GET home page.
 */

exports.about = function(request, response) {
  response.render('generic-text', { title: 'About' });
};

exports.signin = function(request, response) {
	response.render('signin-index', { title: 'Sign in to Loc8r' });
};