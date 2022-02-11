const root = document.querySelector("#root");

function sayHello(name) {
  alert(name);
}

const element = /*#__PURE__*/React.createElement("button", {
  onClick: sayHello.bind(this, "Abdulloh Fahmi")
}, "Click me");
ReactDOM.render(element, root);