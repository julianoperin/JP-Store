import "./App.scss";
import { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//! Screens
import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen/ProductScreen.js";
import CartScreen from "./screens/CartScreen/CartScreen.js";
import About from "./screens/About/About.js";

//! Component
import Navbar from "./components/Navbar/Navbar";
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(!sideToggle)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
