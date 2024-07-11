import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SalesAreaLayout from './components/SalesAreaLayout';
import StorageAreaLayout from './components/StorageAreaLayout';

function App() {
  return (
    <Router basename="/hd_findmymedi">
      <div className="App">
        <Switch>
          <Route exact path="/" component={SalesAreaLayout} />
          <Route path="/storage" component={StorageAreaLayout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;