import React from 'react';
import { Link } from "react-router-dom";
import './StyleDetail.css';

function Detail(props) {
	return (
		<>
		<div className="item-detail_image">
		  <div >
		    <img src={props.image} alt={props.product} />
		  </div>
		  <div className="item-detail">
		    <h1 className="item-detail_product">{props.product}</h1>
		    <p className="item-detail_price">{props.info}</p>
		    <h3 className="item-detail_price">${props.price}</h3>
		  </div>
		   <Link> <buttom>Agregar al carrito</buttom> </Link>
		   </div>
		</>

		);
}

export default Detail;