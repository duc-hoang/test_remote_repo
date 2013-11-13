var View = Backbone.View.extend({
	el:"#todo",
	events:{
		'click #chkBox':'checkBoxClick',
	},
	initialize: function(){
		this.$el.click(this.jQueryClick);
		//this.on('apiEvent',this.callBack);
	},
	checkBoxClick: function(event){
		console.log('called event handler for '+this.el.id);
		//this.trigger(apiEvent);
	},
	jQueryClick: function(event){
		console.log('called jquery event handler for '+this.id);
	},
	callBack: function(eventType){
		console.log('called callBacl '+eventType);
	}
});

var view = new View();