import { useState } from "react";
import { plantList } from "../datas/plantList";
import PlantItem from "./ui/PlantItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";

// Typage
import type { CartItem } from "../types/base";
interface ShoppingListProps {
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
}

function ShoppingList({ addToCart }: ShoppingListProps) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc: string[], plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    [],
  );

  const handleAddToCart = (cart: CartItem) => {
    addToCart(cart);
  };

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <li key={id}>
              <PlantItem
                id={id}
                cover={cover}
                name={name}
                price={price}
                onAddToCart={() =>
                  handleAddToCart({ id, name, price, amount: 1 })
                }
              />
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
