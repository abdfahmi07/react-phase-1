const root = document.querySelector("#root");

function App() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(function () {
    console.log(document.querySelector("#judul"));
  }, [diklik] //watch state
  ); //   If want to render once
  //   React.useEffect(
  //     function () {
  //       console.log(document.querySelector("#judul"));
  //     },
  //     [diklik] //watch state
  //   );

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hello, ini judul"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDiklik(true);
    }
  }, "Click me"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "Add me"), /*#__PURE__*/React.createElement("span", null, "Nilai saat ini: ", count));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);