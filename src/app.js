const root = document.querySelector("#root");

function sayHello(name) {
  alert(name);
}

const element = (
  <button onClick={sayHello.bind(this, "Abdulloh Fahmi")}>Click me</button>
);

ReactDOM.render(element, root);
