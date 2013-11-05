var session = session || {};
(function(){
	request = Backbone.Model.extend({
		defaults:{
			id:'',
			title:'',
			status:'Pending',
			selected:false
		},
		toggle:function(){
			selected : !this.get("selected");
			this.save({
				selected : !this.get("selected")
			});
		}
	});	
	//session.requestItem = new request();
})();
