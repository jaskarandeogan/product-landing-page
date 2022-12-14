import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import { CartContextProvider } from "./components/context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Header />
        <ProductPage />
      </CartContextProvider>
    </div>
  );
}

export default App;
