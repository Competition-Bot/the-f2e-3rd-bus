import "./App.css";
import { Provider } from "react-redux"
//import ScrollToTop from "./components/ScrollToTop";
import { createStore } from 'redux';
import reducerApp from "./reducers";
import routes from './utils/routes';
import Header from './components/Header';
let store = createStore(reducerApp)

function App() {
  return (
    <Provider store={store}>
      <Header />
      {routes}
    </Provider>

  );
}

export default App;
