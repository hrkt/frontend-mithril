const m = require("mithril");

class HelloWorldComponent {
  constructor(greetingMessage) {
    console.log("HelloWorldComponent .ctor")
    this.greetingMessage = greetingMessage;
  }
  view() {
    return m("div", m("p", this.greetingMessage.getText()));
  }
};

module.exports = HelloWorldComponent;