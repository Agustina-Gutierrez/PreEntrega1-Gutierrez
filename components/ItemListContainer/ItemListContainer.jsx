import './StyleItemListContainer.css';
import Item from './Item.jsx';


function Greeting(props) {
	return(
		<>
		<h1>{props.saludo}</h1>
		<div>
		<Item href='#' image='https://i.postimg.cc/cHLVVhPH/voile.jpg' product='Lorem ipsum' price='120' />
		</div>
		</>
	);
}

export default Greeting;
