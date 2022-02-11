const root = document.querySelector("#root");

function App() {
  const [count, updateCount] = React.useState(0);

  console.log(count);
  return (
    <>
      <button
        onClick={function () {
          updateCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={function () {
          updateCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

ReactDOM.render(<App />, root);
