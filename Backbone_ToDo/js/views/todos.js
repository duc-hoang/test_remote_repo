var app = app || {};

app.TodoView = Backbone.View.extend({
	tagName:"li",
	template: _.template($("#item-template").html()),
	events:{
		"click .toggle":"toggleCompleted",
		"click .destroy":"clear",
		"dblckick label":"edit",
		"keypress .edit":"updateOnEnter",
		"blur .edut":"close"
	},
	initialize: function(){
		this.listenTo(this.model, "change", this.render);
		this.listenTo(this.model, "destroy",this.remove);
		this.listenTo(this.model, "visible",this.toggleVisible);
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		this.$input = this.$(".edit");
		
		this.$el.toggleClass( 'completed', this.model.get('completed') );
	    this.toggleVisible();                                             
		return this;
	},
	toggleVisible: function(){
		this.$el.toggleClass( 'hidden',  this.isHidden());
	},
	isHidden: function(){
		var isCompleted = this.model.get("completed");
		return (
			(!isCompleted && app.TodoFilter === "completed") ||
			(isCompleted && app.TodoFilter === "active")
		);
	},
	togglecompleted: function(){
		this.model.toggle();
	},
	edit: function(){
		this.$input.focus();
	},
	close: function(){
		var value = this.$input.val().trim();
		if (value){
			this.model.save({title:value});
		}else{
			this.clear();
		}
	},
	clear: function(){
		this.model.destroy();
	},
	updateOnEnter: function(e){
		if (e.which === ENTER_KEY){
			this.close();
		}
	}
});
