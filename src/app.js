const root = document.querySelector("#root");

function App() {
  const namaRef = React.useRef(null);

  function isSubmit(event) {
    event.preventDefault();
    const nama = namaRef.current.value;

    console.log("Name is: " + nama);
  }

  return (
    <form onSubmit={isSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" name="name" ref={namaRef} />
      </div>
      <button type="submit">Kirim</button>
    </form>
  );
}

ReactDOM.render(<App />, root);
