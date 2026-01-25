import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Header 
        storeName="Component Corner"/>
      <div className="mainContent">
      <Hero
        title ="Welcome to the store"
        subtitle = "Here you can get anything you would like"
        calltoaction = "Shop Here"/>
      <h2>Featured Products</h2>
      <ProductCard
        name="Toaster"
        price="$9.99"
        image="https://placehold.co/600x400"
        description="Newest toaster to add to your collection" />

      <ProductCard
        name="CD Player"
        price="$99.99"
        image="https://placehold.co/600x400"
        description="A way to listen to your CDs" />

      <ProductCard
        name="New Computer"
        price="$999.99"
        image="https://placehold.co/600x400"
        description="The best way to surf the internet" />
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