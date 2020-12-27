import * as React from "react";
import { Home, Rankings } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BotomNav, Header } from "./components/layout";

const App: React.FunctionComponent<unknown> = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/rankings">
            <Rankings />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <BotomNav />
      </Router>
    </>
  );
};

export default App;
