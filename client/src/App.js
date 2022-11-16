import './App.css';
import React from 'react';

function App() {
  const [data, setData] = React.useState(null);
  const [data2, setData2] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/cID=123")
      .then((res) => res.json())
      .then((data) => setData2(data.message));

    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <h1>Hello Wordl!</h1>
      <h2>test</h2>
      <p>{!data ? "Loading..." : data}</p>
      <p>{!data2 ? "Loading..." : data2}</p>
    </div>
  );
}

export default App;
