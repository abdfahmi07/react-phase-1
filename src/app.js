const root = document.querySelector("#root");

function App() {
  const [name, setName] = React.useState("");

  function isSubmit(event) {
    event.preventDefault();

    console.log("Name is: " + name);
  }

  return (
    <form onSubmit={isSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={function (event) {
            setName(event.target.value);
          }}
        />
      </div>
      <button type="submit">Kirim</button>
    </form>
  );
}

ReactDOM.render(<App />, root);
