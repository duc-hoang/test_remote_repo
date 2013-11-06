(function(){
	request = Backbone.Model.extend({
		defaults:{
			id:'',
			title:'',
			requestorId:'',
			beneficiaryId:'',
			status:'Pending',
			selected:false
		},
		toggle:function(){
			selected : !this.get("selected");
			this.save({
				selected : !this.get("selected")
			});
		},
		validate: function(attrs){
			var errors = this.errors = {};
			if (!attrs.id || attrs.id == ''){
				errors.missingId = "Request ID is missing";
			}
			if (!attrs.title || attrs.title == ''){
				errors.missingTitle = "Title is missing";
			}
			if (!attrs.requestorId || attrs.requestorId == ''){
				errors.missingRequestorId = "Requestor ID is missing";
			}
			if (!attrs.beneficiaryId || attrs.beneficiaryId == ''){
				errors.missingBeneficiaryId = "Beneficiaty ID is missing";
			}
			if (!_.isEmpty(errors))
				return errors;
		},
		url:function(){
			return "request/"+this.get("id")+"/store";
		}
	});	
})();
