var session = session || {};
(function($){
	RequestView = Backbone.View.extend({
		el:"#request-main",
		listAll: function(requestItem){
			session.RequestItems.each(function(requestItem){
				var view = session.RequestItemView({model:requestItem});
				$("#request-list").append(view.render().el);
			});
		},
	});
})(jQuery); 