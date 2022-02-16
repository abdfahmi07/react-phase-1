const root = document.querySelector("#root");

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(async function () {
    const response = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
    const results = await response.json();

    setNews(results);
    setLoading(false);
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      {loading ? (
        <i>Loading data....</i>
      ) : (
        <ul>
          {news.map((item) => {
            console.log(item);
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}

ReactDOM.render(<App />, root);
