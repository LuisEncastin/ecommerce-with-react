import React, {useContext} from 'react';

import AppContext from '../../context/AppContext';

import './OrderItem.scss';
import closeButton from "../../assets/icons/icon_close.png";


const OrderItem = ( props ) => {

	const {indexValue, product} = props;

	const {removeFromCart}= useContext(AppContext);

	const handleRemove = index => {
		removeFromCart(index)};

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>$ {product.price}</p>
			<img src={closeButton} alt="close" onClick={()=>handleRemove(indexValue)}/>
		</div>
	);
}

export default OrderItem;