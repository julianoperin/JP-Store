import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen/ProductScreen.js";
import CartScreen from "./screens/CartScreen/CartScreen.js";

function App() {
  return (
    <Router>
      {/*//! Navbar */}
      {/*//! SideDrawer */}
      {/*//! Backdrop */}
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
