
exports.homelist = function(request, response) {
  response.render('locations-list', { title: 'Home' });
};

exports.locationInfo = function(request, response) {
  response.render('location-info', { title: 'Location Info' });
};

exports.addReview = function(request, response) {
  response.render('location-review-form', { title: 'Add Review' });
};