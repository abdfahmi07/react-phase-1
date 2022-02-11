const root = document.querySelector("#root");

function App() {
  const namaRef = React.useRef(null);

  function isSubmit(event) {
    event.preventDefault();
    const nama = namaRef.current.value;
    console.log("Name is: " + nama);
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: isSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Name: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    ref: namaRef
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);