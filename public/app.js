const root = document.querySelector("#root");

function App() {
  const fruits = ["Apple", "Orange", "Grape", "Watermelon"]; //   return array and append to parent element

  return /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruit, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: idx
    }, fruit);
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);