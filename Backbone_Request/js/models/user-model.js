var session = session || {};
(function(){
	session.user = Backbone.Model.extend({
		defaults:{
			id:'',
			firstName:"Duc",
			lastName:"Hoang",
		}
	});
})();	