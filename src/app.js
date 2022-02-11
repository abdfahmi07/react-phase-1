const root = document.querySelector("#root");

function App() {
  const [isLogin, setLogin] = React.useState(false);

  return (
    <>
      <h1>Login dulu, Bro!</h1>
      <p>{isLogin ? "Kamu sudah login" : "Kamu belum login"}</p>
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
