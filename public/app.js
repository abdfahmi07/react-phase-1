const root = document.querySelector("#root");

function App() {
  const [isLogin, setLogin] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Login dulu, Bro!"), /*#__PURE__*/React.createElement("p", null, isLogin ? "Kamu sudah login" : "Kamu belum login"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Login"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);