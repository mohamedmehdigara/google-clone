import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="app">

      <Router>
        <Switch>

          {/* Home (the one with the search on) */}
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>

          {/* SearchPage (The results page) */}
          <Route path="/search">
            <h1>This is the search page</h1>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
