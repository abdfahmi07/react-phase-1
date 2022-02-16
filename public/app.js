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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Hello World"), loading ? /*#__PURE__*/React.createElement("i", null, "Loading data....") : /*#__PURE__*/React.createElement("ul", null, news.map(item => {
    console.log(item);
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.title);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);