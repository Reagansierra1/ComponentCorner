import './ProductCard.css'
function ProductCard({name, price, image, description}) {
  return (
    <div className="product-card">
        <img src={image}/>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
    </div>
  );
}

export default ProductCard;