var testDataGenerator = {};
testDataGenerator.getRequestsJSON = function(){
	var testRequestsJSON = [];
	var myCustomArray = function(elements){
		this.elements = elements;
		this.getRandomElement = function(){
			return this.elements[Math.floor(Math.random() * this.elements.length)];
		};
	};
	
	var statuses = new myCustomArray(), titles = new myCustomArray();
	statuses.elements = ["Approved","Denied","Pending","Error"];
	titles.elements = ["Resource Request","Entitlement Request","Policy Request"];
	for (var i=0; i < 5; i++){
		testRequestsJSON.push({
			id:i,
			title:titles.getRandomElement(),
			status:statuses.getRandomElement(),
			selected:false
		});
	};
	return testRequestsJSON;
}; 

