import React, { useContext } from 'react';

// components
import OrderItem from '../../components/OrderItem/OrderItem';
import AppContext from '../../context/AppContext';

// styles
import './MyOrder.scss';
import arrow from '../../assets/icons/flechita.svg'

const MyOrder = () => {

	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index)=>
				<OrderItem
					indexValue={index}
					key={index}
					product={product}/>
					)}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;