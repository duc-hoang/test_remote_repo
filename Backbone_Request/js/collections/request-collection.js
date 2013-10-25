var session = session || {};
(function(){
	session.user.requests = Backbone.Collection.extend({
		model:session.user.request
	});
});