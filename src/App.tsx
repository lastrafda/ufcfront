import * as React from "react";
import { Home, Rankings } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BotomNav from "./components/BottomNav";
import Header from "./components/Header";
import Gallery from "./pages/Gallery";

const App: React.FunctionComponent<unknown> = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/rankings">
            <Rankings />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <div style={{ height: "70px" }}></div>
        <BotomNav />
      </Router>
    </>
  );
};

export default App;
