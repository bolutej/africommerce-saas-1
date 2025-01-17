import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductTable from '../ProductTable';
import classes from './SellersProduct.module.css';

export const SellersProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((data) => {
        return setProduct(data);
      });
  }, [setProduct]);
  return (
    <div className={classes.container}>
      <div className={classes.product_header}>
        <span className={classes.title}>All Product</span>
        <span>
          {' '}
          <Link to="">
            <button className={classes.button}>Add New Product</button>
          </Link>
        </span>
      </div>
      <div>
        <ProductTable data={product} />
      </div>
    </div>
  );
};
