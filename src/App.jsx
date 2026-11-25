import Header from "./components/Header";
import Home from "./pages/HomePage/Home";
import Checkout from "./pages/CheckoutPage/Checkout";
import PurchaseHistory from "./pages/PurchaseHistoryPage/PurchaseHistory";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route Path="" element={<Home />} />
        <Route Path="/checkout" element={<Checkout />} />
        <Route Path="/history" element={<PurchaseHistory />} />
      </Routes>
    </>
  );
}

export default App;
