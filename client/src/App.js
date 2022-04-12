import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Food from "./components/Food";
import Add from "./components/Add";
import Apperal from "./components/Apperal"
import Hygiene from "./components/Hygiene";
import Sidebar from './components/sidebar';
import Login from './components/Login';
import SignUp from './components/Sign-up';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const loggedIn = false; // this will be replaced with actual state that is triggered on log in

  return (
    <>
      <Header></Header>
      <main>
        <Router>
          { loggedIn
            ? <>
              <Sidebar />
              <Switch>
                <Route path="/food" exact component={ Food } />
                <Route path="/add-a-business" exact component={ Add } />
                <Route path="/hygiene" exact component={ Hygiene } />
                <Route path="/apparel" exact component={ Apperal } />
                <Redirect from="*" to="/" />
              </Switch>
            </>
            : <Switch>
              <Route path="/" exact component={ Login } />
              <Route path="/sign-up" exact component={ SignUp } />
              <Route path="/" exact component={ About } />
              <Redirect from="*" to="/" />
            </Switch>
          }
        </Router>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
