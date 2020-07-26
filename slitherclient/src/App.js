import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Crawl from "./components/routes/Crawl";
import UrlInput from "./components/common/UrlInput";

const App = () => {
  return (
    <>
      <UrlInput />
      <Switch>
        <Route exact path="/" component={Crawl} />
      </Switch>
    </>
  );
};

export default App;
