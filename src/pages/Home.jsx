import { Link } from "react-router-dom";
import{ getProducts } from "../data/products";
import ProductCard from "../components/productCard";



export default function Home() {
    const products = getProducts(); // Assuming you have a function to fetch products
    return (
        <div className="page">
           <div className="home-hero">
            <h1 className="home-title">Welcome to ShopHub</h1>
            <p className="home-subtitle">Discover amazing products at unbeatable prices.</p>
          </div> 
          <div className="container">
            <h2 className="page-title">Featured Products</h2>
            <div className="product-grid">
                {products.map((product) => (
                 <ProductCard  product={product} key={product.id}  />
                ))}
            </div>
          </div>
        </div>
    )
}