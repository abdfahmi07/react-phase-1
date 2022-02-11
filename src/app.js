const root = document.querySelector("#root");

function App() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(function () {
    console.log(document.querySelector("#judul"));
  });

  return (
    <>
      <h1 id="judul">Hello, ini judul</h1>
      <button
        onClick={function () {
          setDiklik(true);
        }}
      >
        Click me
      </button>
    </>
  );
}

ReactDOM.render(<App />, root);
