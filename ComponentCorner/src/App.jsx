import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CartItem from "./components/CartItem";

function App() {
  const [productsincart, setCartState] = useState([]);
  const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: "https://placehold.co/600x400",
    description: "Premium noise-cancelling headphones with 30-hour battery life"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 249.99, 
    image: "https://placehold.co/600x400",
    description: "Fitness tracker with heart rate monitor and GPS"
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 79.99, 
    image: "https://placehold.co/600x400",
    description: "Portable waterproof speaker with 360-degree sound"
  },
  { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://placehold.co/600x400",
    description: "Ergonomic aluminum stand for laptops and tablets"
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: "https://placehold.co/600x400",
    description: "4K webcam with auto-focus and noise reduction"
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: "https://placehold.co/600x400",
    description: "RGB backlit keyboard with custom switches"
  }
  ];
  
  const addToCart = (product) => {
    setCartState([...productsincart, product])
  }

  const removeFromCart = (productToRemove) => {
    setCartState(productsincart.filter((product) => product != productToRemove));
  }

  const priceTotal = productsincart.reduce((totalPrice, product) => {
      return totalPrice + product.price
  }, 0);

  return (
    <div className="app">
      <Header 
        storeName="Component Corner"
        cartAmount={productsincart.length}/>
      <div className="mainContent">
      <Hero
        title ="Welcome to the store"
        subtitle = "Here you can get anything you would like"
        calltoaction = "Shop Here"/>
      <h2>Featured Products</h2>
      {products.map(product => (
        <ProductCard
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
          product={product}
          addToCart={addToCart}
          priceTotal
        />
      ))}
      {productsincart.map(product => (
        <CartItem
          name={product.name}
          price={product.price}
          product={product}
          removeFromCart = {removeFromCart}        
        />
      ))}
      {productsincart.length > 0 ?
      (<p>Total: ${priceTotal}</p>)
      : <h2>Shopping is Empty</h2>}
      </div>
      <Footer
        storeName="Component Corner"
        phone="909-888-4534"
        email="test@company.com"
        address="123 Elvis Street, Counter City, ND 12567"
      />
    </div>
  )
}

export default App;