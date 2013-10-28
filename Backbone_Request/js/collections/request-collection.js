var session = session || {};
(function(){
	RequestList = Backbone.Collection.extend({
		model:session.user.request
	});
	session.requestList = new RequestList(); 
});