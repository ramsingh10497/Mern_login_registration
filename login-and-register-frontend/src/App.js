import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ user, setLoginUser] = useState({});

  useEffect(() => {
    const userDetail = JSON.parse(sessionStorage.getItem("user"));
    if(userDetail) {
      login(userDetail)
      // setLoginUser({...userDetail})
    }
  },[])

  const login = (userDetail) => {
    axios.post("http://localhost:9002/api/user/login", userDetail)
    .then(res => {
        setLoginUser(res.data.user);
    })
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
