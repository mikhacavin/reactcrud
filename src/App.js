import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList.js";
import AddProduct from "./components/AddProduct.js";
import EditProduct from "./components/EditProduct.js";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/add">
            <AddProduct />
          </Route>
          <Route path="/edit/:id">
            <EditProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
