var ToDo = Backbone.Model.extend({
	defaults:{
		title:'',
		completed: false
	},
	initialize:function(){
		this.on("change:title",function(){
			console.log('Title has changed');
		});
		this.on("invalid",function(){
			console.log("Validation error: "+this.validationError);
		});
	},
	validate:function(attributes){
		if (attributes.title.length == 0 || attributes.title==undefined){
			return "To do item needs a title";
		}
	}
});

var myToDo = new ToDo({
	title:'Go home',
	completed:'No'
});

//myToDo.set({completed:'yes'},{validate:true});
//console.log(JSON.stringify(myToDo));
/*myToDo.on("change:title",function()
		{
			console.log("Title changed to "+this.get("title"));
		});*/
//myToDo.set({"title":"Sit down"});
//console.log(myToDo.hasChanged('title'));

//console.log(JSON.stringify(myToDo.toJSON()));
//console.log(myToDo.toJSON());

