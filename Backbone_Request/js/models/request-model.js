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
		validate: function(){
			var errors = this.errors = {};
			if (!this.attributes.id || this.attributes.id == ''){
				errors.missingId = "Request ID is missing";
			}
			if (!this.attributes.title || this.attributes.title == ''){
				errors.missingTitle = "Title is missing";
			}
			if (!this.attributes.requestorId || this.attributes.requestorId == ''){
				errors.missingRequestorId = "Requestor ID is missing";
			}
			if (!this.attributes.beneficiaryId || this.attributes.beneficiaryId == ''){
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
