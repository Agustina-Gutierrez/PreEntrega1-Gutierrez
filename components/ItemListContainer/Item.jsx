import React from 'react';
import { Link } from "react-router-dom";
import './StyleItems.css';
function Item(props) {
	const {href, image , product , price} = props.item;
	return (
		<Link className="item-card" to={props.href}>
		  <div className="item-card_image">
		    <img src={props.image} alt={props.product} />
		  </div>
		  <div className="item-detail">
		    <h3 className="item-detail_product">{props.product}</h3>
		    <p className="item-detail_price">${props.price}</p>
		  </div>
		</Link>
		);
}

export default Item;