import './App.css';
import React, { useState } from 'react';
import SignUp from './components/SignUp';
import LoggedIn from './components/LoggedIn';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');
  

  // React.useEffect(() => {
  //   fetch("/test")
  //     .then((res) => res.json())
  //     .then((data) => setData2(data.message));

  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  React.useEffect(() =>{
    fetch("/loggedin")
      .then((res) => res.json())
      .then((data) => setName(data.name))
      .then(() => setLoggedIn(true));
  })

  return (
    <div>
      {loggedIn ? <LoggedIn name={name} /> : <SignUp />}
    </div>
  );
}

export default App;
