const root = document.querySelector("#root");

function App() {
  const [isLogin, setLogin] = React.useState(false);

  if (isLogin) {
    return (
      <>
        <h1>Sudah login, Bro!</h1>
        <button
          onClick={function () {
            setLogin(false);
          }}
        >
          Logout
        </button>
      </>
    );
  }

  return (
    <>
      <h1>Login dulu, Bro!</h1>
      <button
        onClick={function () {
          setLogin(true);
        }}
      >
        Login
      </button>
    </>
  );
}

ReactDOM.render(<App />, root);
