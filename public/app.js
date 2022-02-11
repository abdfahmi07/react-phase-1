const root = document.querySelector("#root");

function App() {
  const [name, setName] = React.useState("");

  function isSubmit(event) {
    event.preventDefault();
    console.log("Name is: " + name);
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: isSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Name: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    value: name,
    onChange: function (event) {
      setName(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);