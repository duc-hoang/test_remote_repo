var session = session || {};
(function(){
	user = Backbone.Model.extend({
		defaults:{
			id:'',
			firstName:"Duc",
			lastName:"Hoang",
			authenticated:false
		}
	});
	session.currentUser = new user();
})();	