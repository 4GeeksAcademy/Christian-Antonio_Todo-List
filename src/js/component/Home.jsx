import React from "react";

//include images into your bundle
import Formulario from "./Formulario";

//create your first component
const Home = () => {
	return (
		<div className='container mt-5'>
		<h1>To Do List:</h1>
		  <Formulario />
		</div>
	);
};

export default Home;
