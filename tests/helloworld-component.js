const o = require("mithril/ospec/ospec");
const callAsync = require("mithril/test-utils/callAsync");
const mock = require("mithril/test-utils/browserMock")();

global.window = mock;
global.document = mock.document;

var HelloWorldComponent = require("../src/helloworld-component");

o.spec("HelloWorldComponent", function() {
  o("returns a div", function() {
    var vnode = HelloWorldComponent.view();

    o(vnode.tag).equals("div");
    o(vnode.children.length).equals(1);
    o(vnode.children[0].tag).equals("p");
    o(vnode.children[0].text).equals("hello, world");
  });
});
