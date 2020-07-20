import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/routes/Home";
import Crawl from "./components/routes/Crawl";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/crawl/:url" exact component={Crawl} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
