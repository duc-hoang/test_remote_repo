var session = session || {};
(function(){})(
	user.request = Backbone.Model.extend({
		defaults:{
			id:'',
			title:'',
			status:'Pending',
			selected:false
		},
		toggle:function(){
			this.save({
				selected : !this.get("selected")
			});
		}
	})	
);
