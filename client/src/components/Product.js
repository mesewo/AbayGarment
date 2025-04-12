import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'; // Import LazyLoadImage
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import blur effect for lazy loading
import './ProductCard.css'; // Import the ProductCard.css file

const Product = ({ product }) => {
  const handleQuickView = () => {
    // Logic for quick view (e.g., open a modal or navigate to product details)
    console.log(`Quick View for product: ${product.name}`);
  };

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        <Link to={`/product/${product._id}`}>
          <LazyLoadImage
            src={product.image}
            alt={product.name}
            className="product-image"
            effect="blur" // Apply blur effect while loading
          />
        </Link>
        {/* Optional Badge (e.g., Sale, New Arrival, Discount) */}
        {product.isNew && <span className="product-badge">New</span>}
        {product.discount && (
          <span className="product-badge discount">-{product.discount}%</span>
        )}
        {/* Quick View Button */}
        <button className="quick-view-btn" onClick={handleQuickView}>
          Quick View
        </button>
      </div>

      {/* Product Content */}
      <div className="product-content">
        {/* Product Category (Optional) */}
        {product.category && <div className="product-category">{product.category}</div>}

        {/* Product Title */}
        <Link to={`/product/${product._id}`} className="product-title">
          {product.name}
        </Link>

        {/* Product Description (Optional) */}
        {product.description && (
          <div className="product-description">{product.description}</div>
        )}

        {/* Product Footer */}
        <div className="product-footer">
          {/* Product Price */}
          <div className="product-price">
            ${product.price}
            {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
          </div>

          {/* Product Rating */}
          <div className="product-rating">
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;