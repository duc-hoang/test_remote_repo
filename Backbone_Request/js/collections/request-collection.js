var session = session || {};
(function(){
	var RequestList = Backbone.Collection.extend({
		model:session.user.request
	});
	session.requestItems = new RequestList(); 
});