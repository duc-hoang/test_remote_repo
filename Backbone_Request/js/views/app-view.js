var session = session || {};
(function(){
	AppView = Backbone.View.extend({
		userTemplate:_.template($("#user-template").html()),
		initialize: function(){
			console.log('Initializing App View');
			this.listenTo(session.currentUser,"change:authenticated",this.userLoggedInEventHandler);
			this.listenTo(session.currentUser,"invalid",this.userErrorHandler);
		},
		render: function(){
			console.log("Rendering");
			this.$("#request-header").html(this.userTemplate({
					firstName:session.currentUser.get("firstName"),
					lastName:session.currentUser.get("lastName"),
			})); 
		},
		userLoggedInEventHandler: function(){
			console.log("User "+session.currentUser.get("firstName")+" "+session.currentUser.get("lastName")+ " is authenticated " +session.currentUser.get("authenticated"));
		},
		userErrorHandler: function(){
			console.log(session.currentUser.validationError);
		}
	});
})();