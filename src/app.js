const root = document.querySelector("#root");

function App() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(
    function () {
      console.log(document.querySelector("#judul"));
    },
    [diklik] //watch state
  );

  //   If want to render once
  //   React.useEffect(
  //     function () {
  //       console.log(document.querySelector("#judul"));
  //     },
  //     [diklik] //watch state
  //   );

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
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Add me
      </button>
      <span>Nilai saat ini: {count}</span>
    </>
  );
}

ReactDOM.render(<App />, root);
