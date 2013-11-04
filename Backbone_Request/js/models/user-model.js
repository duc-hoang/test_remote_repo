var session = session || {};
(function(){
	user = Backbone.Model.extend({
		defaults:{
			id:'',
			firstName:"",
			lastName:"",
			authenticated:false
		},
		url:"/user"
	});
})();	