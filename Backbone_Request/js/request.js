var session = session || {};
var currentUser = new session.user();
(function($){
	new session.RequestView();
})(jQuery);
