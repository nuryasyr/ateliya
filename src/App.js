import React from "react";
import "./index.css";
import ShopInfo from "./components/ShopInfo";
import ProductInfo from "./components/ProductInfo";
import Card from "./components/Card";


const App = () => {
  return (
      <div>
          <ShopInfo />
          <ProductInfo />
          <Card />
      </div>  
  );
};

export default App;
