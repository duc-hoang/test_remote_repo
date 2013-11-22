var session = session || {};
(function(){
	user = Backbone.Model.extend({
		defaults:{
			id:'',
			firstName:'',
			lastName:'',
			authenticated:false
		},
		validate:function(attributes){
			if (!attributes.id || attributes.id == ''){
				validationError = "User ID is missing";
			}
			if (!attributes.firstName || attributes.firstName == ''){
				validationError = "First name is missing";
			}
			if (!attributes.lastName || attributes.lastName == ''){
				validationError = "Last name is missing";
			}
			return validationError;
		},
		url:"/user"
	});
	session.currentUser = new user();
})();	