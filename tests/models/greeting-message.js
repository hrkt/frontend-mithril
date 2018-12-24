const o = require("mithril/ospec/ospec");
const callAsync = require("mithril/test-utils/callAsync");
const GreetingMessage = require("../../src/models/greeting-message");
const greetingMessage = new GreetingMessage();

o.spec("GreetingMessage", function() {
  o.before(function(done){
    console.log("running before()");
    window.$defineRoutes({
      'GET /api/greeting': function(req) {
        console.log("GET called.");
        return {
          status: 200,
          responseText: JSON.stringify({
            message: 'hello, world'
          })
        }
      }
    });
    done();
  });
  o("returns a message", function(done, timeout) {
    timeout(1000);

    greetingMessage.loadMessage();
    // API call should be done in 100ms
    setTimeout(() => {
        o(greetingMessage.getText()).equals("hello, world");
    }, 100);
    done();
  });
});
