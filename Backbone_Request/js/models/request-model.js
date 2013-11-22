(function(){
	request = Backbone.Model.extend({
		defaults:{
			id:'',
			title:'',
			requestorId:'',
			beneficiaryId:'',
			status:'Pending',
			selected:false,
		},
		toggle:function(){
			selected : !this.get("selected");
			this.save({
				selected : !this.get("selected")
			});
		},
		validate: function(attributes){
			if (!attributes.id || attributes.id == ''){
				validationError = "Request ID is missing";
			}
			if (!attributes.title || attributes.title == ''){
				validationError = "Title is missing";
			}
			if (!attributes.requestorId || attributes.requestorId == ''){
				validationError = "Requestor ID is missing";
			}
			if (!attributes.beneficiaryId || attributes.beneficiaryId == ''){
				validationError = "Beneficiaty ID is missing";
			}
			if (!attributes.status || attributes.status == ''){
				validationError = "Beneficiaty ID is missing";
			}
			return validationError;
		},
		url:function(){
			return "request/"+this.get("id")+"/store";
		}
	});	
})();
