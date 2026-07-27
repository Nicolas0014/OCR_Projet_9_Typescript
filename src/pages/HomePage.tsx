import Footer from "../components/layout/Footer";
import ShoppingList from "../components/ShoppingList";
import "../styles/Layout.css";

// Typage
import type { CartItem } from "../types/base";
interface HomePageProps {
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
}

function HomePage({ cart, addToCart }: HomePageProps) {
  return (
    <div>
      <div className="lmj-layout-inner">
        <ShoppingList cart={cart} addToCart={addToCart} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
