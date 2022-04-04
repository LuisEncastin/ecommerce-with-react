import React, { useContext } from 'react';

//Context
import AppContext from '../../context/AppContext';
// styles
import './ProductItem.scss';
import addToCartSvg from '../../assets/icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext)

	// se le pasa el producto solo cuando se le da click
	const handleClick = (item) => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>$ {product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=>handleClick(product)} >
					<img src={addToCartSvg} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;