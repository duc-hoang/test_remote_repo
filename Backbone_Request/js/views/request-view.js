var session = session || {};
(function($){
	session.RequestView = Backbone.View.extend({
		el:"#request-main",
		userTemplate:_.template($("#user-template").html()), 
		listAll: function(requestItem){
			session.RequestItems.each(function(requestItem){
				var view = session.RequestItemView({model:requestItem});
				$("#request-list").append(view.render().el);
			});
		},
		initialize: function(){
			this.listenTo(currentUser,"change:authenticated",this.userLoggedInEventHandler);
		},
		render: function(){
			console.log("Rendering");
			this.$("#request-header").html(this.userTemplate({
					firstName:currentUser.get("firstName"),
					lastName:currentUser.get("lastName"),
			})); 
		},
		userLoggedInEventHandler: function(){
			console.log("User "+currentUser.get("firstName")+" "+currentUser.get("lastName")+ " is authenticated " +currentUser.get("authenticated"));
		}
	});
})(jQuery); 