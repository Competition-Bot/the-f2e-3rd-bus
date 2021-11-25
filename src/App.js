import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
//import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Breadcrumb from "./components/BreadCrumb";
import BusSearch from "./pages/BusSearch";
import PlanSearch from "./pages/PlanSearch";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
          <Footer />
        </Route>
        <Redirect exact from="/news" to="/news/1" />
        <Route path="/news/:page">
          <Breadcrumb />
          <News />
          <NewsDetail/>
          <Footer />
        </Route>
        <Route exact path="/news/detail/:newsid">
          <Breadcrumb />
          <NewsDetail />
          <Footer />
        </Route>
        <Route path="/bussearch">
          <BusSearch />
        </Route>
        <Route path="/plansearch">
          <PlanSearch />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
