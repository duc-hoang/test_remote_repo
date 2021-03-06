var server= {};

describe("Test request model object", function(){
	describe("Test request model object creation", function(){
		it("Should create an request object with default values", function(){
			var testRequest = new request();
			expect(testRequest).toBeDefined();
			expect(testRequest.get("status")).toEqual("Pending");
		});
	});
	describe("Test request model object validation", function(){
		it("Should fail validation when setting a null ID", function(){
			var testRequest = new request();
			testRequest.set({id:''},{validate:true});
			expect(testRequest.validationError).toBe('Beneficiaty ID is missing');
		});
	});
	describe("Test request model object syncing", function(){
		it("Should trigger save method when toggle the selected state", function(){
			var testRequest = new request();
			spyOn(testRequest,"save");
			testRequest.toggle();
			expect(testRequest.save).toHaveBeenCalledWith({selected:!testRequest.get("selected")});
			testRequest.save.reset();
		});
	});
});

/*describe("Test request collection object", function(){
	describe("Test fetch requests for user", function(){
		beforeEach(function(){
			server = sinon.fakeServer.create();
			server.respondWith("GET","/requests",[200,
			                                  	{"Contect-Type":"application/json"},
			                                  	JSON.stringify(testDataGenerator.getRequestsJSON())]);
		});
		it ("Should make one ajax call to the server", function(){
			spyOn(Backbone,"ajax");
			session.Requests.fetch();
			server.respond();
			expect(Backbone.ajax.callCount).toEqual(1);
		});
		afterEach(function(){
			server.restore();
			Backbone.ajax.reset();
		});
	});
});*/

/*describe("Test user model object",function(){
describe("Test user login", function(){
	beforeEach(function(){
		server = sinon.fakeServer.create();
		server.respondWith("GET","/user",[200,
		                                  	{"Contect-Type":"application/json"},
		                                  	'{"id": 12, "firstName":"Duc", "lastName":"Hoang","authenticated":true}']);
	});
	it("Should call the request view user logged in event handler", function(){
		currentUser = new user();
		var requestView = new session.RequestView();
		var spy = sinon.spy(requestView.userLoggedInEventHandler);
		currentUser.fetch();
	    server.respond();
	    expect(currentUser.get("authenticated")).toEqual(true);
	});
	afterEach(function(){
		server.restore();
	});
});
});
*/
