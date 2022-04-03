import React from 'react';

// components
import ProductItem from '../components/ProductItem';
import UseGetProducts from '../hooks/useGetProducts';

// styles
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

	const products = UseGetProducts(API)
	
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product=>
					(<ProductItem product={product} key={product.id}/>)
				)}
			</div>
		</section>
	);
}

export default ProductList;