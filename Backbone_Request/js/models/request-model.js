var session = session || {};
(function(){})(
	session.user.request = Backbone.Model.extend({
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
