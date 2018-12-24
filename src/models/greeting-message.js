const m = require("mithril");

class GreetingMessage {
  constructor() {
    this.text = "initial";
  }
  loadMessage() {
    console.log("begin loadMessage()");
    const self = this;
    m.request({
      method: "GET",
      url: "/api/greeting",
      withCredentials: true
    }).then(function(res) {
      console.log("returned:" + res)
      self.setText(res.message);
    });
  }
  getText() {
    return this.text;
  }
  setText(text) {
    console.log("set text to " + text)
    this.text = text;
  }
};

module.exports = GreetingMessage;
