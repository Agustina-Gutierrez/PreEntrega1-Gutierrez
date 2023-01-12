import './StyleItemListContainer.css';
import Item from './Item.jsx';
import Detail from './ItemDetailContainer.jsx';


function Greeting(props) {
	return(
		<>
		<h1>{props.saludo}</h1>
		<div>
		<Item href='#' image='https://i.postimg.cc/c4dZZ5RK/Screenshot-20210210-175324-copia.png' product='Lorem ipsum' price='120' />
		<Item href='#' image='https://i.postimg.cc/c4dZZ5RK/Screenshot-20210210-175324-copia.png' product='Lorem ipsum' price='120' />
		<Item href='#' image='https://i.postimg.cc/c4dZZ5RK/Screenshot-20210210-175324-copia.png' product='Lorem ipsum' price='120' />
		<Item href='#' image='https://i.postimg.cc/c4dZZ5RK/Screenshot-20210210-175324-copia.png' product='Lorem ipsum' price='120' />
		</div>
		</>
	);
}

export default Greeting;