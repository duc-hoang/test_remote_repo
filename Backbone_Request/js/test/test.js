function say(msg){
		console.log(msg);
	};
describe("Test user fetcj",function(){
	var server= {};
	beforeEach(function(){
		server = sinon.fakeServer.create();
	});
	it(":It should call the request view user logged in event handler", function(){
		currentUser = new user();
		var requestView = new session.RequestView();
		var spy = sinon.spy(requestView.userLoggedInEventHandler);
		server.respondWith("GET","/user",[200,
		                                  	{"Contect-Type":"application/json"},
		                                  	'{"id": 12, "firstName":"Duc", "lastName":"Hoang","authenticated":true}']);
		currentUser.fetch();
	    server.respond();
	    console.log(spy.called);
	});
});
