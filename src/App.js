import React from 'react';
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
