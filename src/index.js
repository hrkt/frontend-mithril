"use strict";

const m = require("mithril");

const GreetingMessage = require("./models/greeting-message");
const greetingMessage = new GreetingMessage();
greetingMessage.loadMessage();

setTimeout(function() {
    const HelloWorldComponent = require("./views/helloworld-component");
    const helloWorldComponent = new HelloWorldComponent(greetingMessage);
    
    m.mount(document.body, helloWorldComponent);    
}, 1000);
