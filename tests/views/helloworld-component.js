const o = require("mithril/ospec/ospec");

// mock
const greetingMessage = {
  getText: () => {
    return "hello, world";
  }
};

var HelloWorldComponent = require("../../src/views/helloworld-component");
helloWorldComponent = new HelloWorldComponent(greetingMessage);

o.spec("HelloWorldComponent", function() {
  o("returns a div", function() {
    var vnode = helloWorldComponent.view();

    o(vnode.tag).equals("div");
    o(vnode.children.length).equals(1);
    o(vnode.children[0].tag).equals("p");
    o(vnode.children[0].text).equals("hello, world");
  });
});
