var session = session || {};
(function($){
	session.RequestItemView = Backbone.View.extend({
		tagName:"li",
		template:_.template($("#request-item-template").html()),
		render:function(){
			this.$el.html(this.template(this.model.toJSON()));
		}
	});
})(jQuery); 