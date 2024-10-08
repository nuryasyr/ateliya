import { Routes, Route } from 'react-router-dom';
import SellerPage from './components/SellerPage';
import ProductInfo from './components/ProductInfo';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SellerPage />} />
      <Route path="/product/:id" element={<ProductInfo />} />
    </Routes>
  );
};

export default App;




