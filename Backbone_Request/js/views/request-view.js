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
			console.log("Intitializing");
			this.render();
		},
		render: function(){
			this.$("#request-header").html(this.userTemplate({
					firstName:currentUser.get("firstName"),
					lastName:currentUser.get("lastName"),
			})); 
		}
	});
})(jQuery); 