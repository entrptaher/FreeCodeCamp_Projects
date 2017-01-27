"use strict";

var TextArea = React.createClass({
  displayName: "TextArea",

  getInitialState: function getInitialState() {
    return {
      typed: ""
    };
  },
  onChange: function onChange(event) {
    document.getElementById("output").innerHTML = marked(event.target.value);
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement("textarea", { onChange: this.onChange.bind(this) })
    );
  }
});
React.render(React.createElement(TextArea, null), document.querySelector('#source'));

/*
Resources: https://www.peterbe.com/plog/onchange-in-reactjs
*/