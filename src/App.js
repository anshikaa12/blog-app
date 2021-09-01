
import './App.css';
import Navbar from './navbar'
import Home from './home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './blogdetails';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/create">
                <Create />
              </Route>
              <Route exact path="/blogs/:id">
                <BlogDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
