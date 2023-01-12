import React from 'react';
import { Link } from "react-router-dom";
import './StyleItems.css';
function Item(props) {
	return (
		<Link id="content-item" className="item-card" to={props.id}>
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