var server= {};

describe("Test request model object", function(){
	it("Should create an request object with default values", function(){
		var testRequest = new request();
		expect(testRequest).toBeDefined();
		expect(testRequest.get("status")).toEqual("Pending");
	});
	it("Should trigger save method when toggle the selected state", function(){
		var testRequest = new request();
		spyOn(testRequest,"save");
		testRequest.toggle();
		expect(testRequest.save).toHaveBeenCalledWith({selected:!testRequest.get("selected")});
		testRequest.save.reset();
	});
	it("Should call validate method before calling save", function(){
		var testRequest = new request();
		spyOn(testRequest,"validate");
		spyOn(testRequest,"save");
		testRequest.toggle();
		expect(testRequest.validate).toHaveBeenCalled();
		expect(testRequest.save).toHaveBeenCalled();
		testRequest.validate.reset();
		testRequest.save.reset();
	});
	it("Should raise an error when saving the request with empty id", function(){
		var testRequest = new request();
		testRequest.toggle();
		spyOn(testRequest,"validate").andCallThrough();
		testRequest.toggle();
		expect(testRequest.validate).toHaveBeenCalled();
		testRequest.validate.reset();
	});
});

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

describe("Test request collection object", function(){
	describe("Test fetch requests for user", function(){
		beforeEach(function(){
			server = sinon.fakeServer.create();
			server.respondWith("GET","/requests",[200,
			                                  	{"Contect-Type":"application/json"},
			                                  	JSON.stringify(testDataGenerator.getRequestsJSON())]);
		});
		it ("Should fetch the requests", function(){
			session.Requests.fetch();
			server.respond();
			expect(session.Requests).toBeDefined();
		});
		afterEach(function(){
			server.restore();
		});
	});
});
*/