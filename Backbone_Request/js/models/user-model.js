var session = session || {};
(function(){
	session.user = Backbone.Model.extend({
		defaults:{
			id:'',
			firstName:"",
			lastName:"",
			requests : session.requests,
		}
	});
})();	