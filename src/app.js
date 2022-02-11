const root = document.querySelector("#root");

function App() {
  const fruits = ["Apple", "Orange", "Grape", "Watermelon"];

  //   return array and append to parent element
  return (
    <ul>
      {fruits.map(function (fruit, idx) {
        return <li key={idx}>{fruit}</li>;
      })}
    </ul>
  );
}

ReactDOM.render(<App />, root);
