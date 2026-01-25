import "./Header.css";
function Header({ storeName, cartAmount }) {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="store-name">{storeName}</div>
        <nav>
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
        <div className="cart-container"> 
            <span className="cart-icon">🛒</span> 
            <p className="cart-badge">{cartAmount}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;