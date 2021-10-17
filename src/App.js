import { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductContext from "./context/ProductContext";
import Login from "./Pages/Auth/Login/Login";
import Carts from "./Pages/Cart/Carts/Carts";
import Home from "./Pages/Home/Home";
import ViewProduct from "./Pages/Home/ViewProduct/ViewProduct";
import Header from "./Pages/Shared/Header/Header";
export const AddToCartContext = createContext();
function App() {
  return (
    <ProductContext>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/single/product/:id">
            <ViewProduct />
          </Route>
          <Route exact path="/carts">
            <Carts />
          </Route>
        </Switch>
      </Router>
    </ProductContext>
  );
}

export default App;
