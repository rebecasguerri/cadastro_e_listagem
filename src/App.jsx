import { useState } from "react";
import "./App.css";
import Forms from "./components/Form/Forms";
import List from "./components/ListProducts/ListProducts";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  return (
    <div>
      <Forms />
      <ListProducts />;
    </div>
  );
}

export default App;
