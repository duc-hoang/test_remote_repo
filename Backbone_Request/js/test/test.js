var server= {};
describe("Test user model object",function(){
	describe("Test user login", function(){
		beforeEach(function(){
			server = sinon.fakeServer.create();
			server.respondWith("GET","/user",[200,
			                                  	{"Contect-Type":"application/json"},
			                                  	'{"id": 12, "firstName":"Duc", "lastName":"Hoang","authenticated":true}']);
		});
		it("Should call the request view user logged in event handler", function(){
			currentUser = new user();
			/*var requestView = new session.RequestView();
			var spy = sinon.spy(requestView.userLoggedInEventHandler);*/
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
