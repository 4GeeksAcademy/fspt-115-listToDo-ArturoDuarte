import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [tareas, setTareas] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleKeyUp = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			setTareas([...tareas, inputValue.trim()]);
			setInputValue("");
			console.log(inputValue);

		}
	}
	const eliminarTarea = (index) => {
		let newTareas = tareas.filter((tarea, i) => {
		/*	console.log("Tarea:", tarea);
			console.log("Índice actual:", i);
			console.log("Índice a eliminar:", index);
			console.log("¿Se queda en la lista?", i !== index);
			console.log("--------------------"); */ // esto me lo ha enseñado robert para poder ver como funciona eliminar las tareas porque investigue que es con el filter pero no tenia clara la idea de como utilizarlo para eliminar dichas tareas//
			return i !== index;         
		}); 
		console.log("lista actual: "+ tareas);
		
		setTareas(newTareas)
		console.log("Nueva lista:" + newTareas);
		
  
	}

	return (
		<div className="container mt-4">
			<h2>Lista de tareas</h2>
			<input type="text"
				className="form-control"
				placeholder="Inserte acá la tarea pendiente"
				value={inputValue}
				onChange={(e) => { setInputValue(e.target.value) }}
				onKeyUp={handleKeyUp} />
			<ul className="list-group mt-3">
				{tareas.map((tarea, index) => (
					<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
						{tarea}
						<button className="btn btn-sm btn-danger" onClick={() => eliminarTarea(index)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;