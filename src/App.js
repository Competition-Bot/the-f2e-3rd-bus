import "./App.css";
import { Provider } from "react-redux"
//import ScrollToTop from "./components/ScrollToTop";
import { createStore } from 'redux';
import Home from './pages/Home';
import reducerApp from "./reducers";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

let store = createStore(reducerApp)

function App() {
  return (
    <Provider store={store}>
      
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
      <div className="App">
      </div>
    </Provider>

  );
}

export default App;
