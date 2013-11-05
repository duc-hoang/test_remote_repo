var session = session || {};
(function(){
	var RequestList = Backbone.Collection.extend({
		model:request,
		url:"/requests"
	});
	session.Requests = new RequestList();
})();