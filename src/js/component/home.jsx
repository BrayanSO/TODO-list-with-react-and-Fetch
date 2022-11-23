import React from "react";
import Box from "./box.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Todos</h1>
			<Box></Box>
			<p>
				<img src={rigoImage} />
			</p>
		</div>
	);
};

export default Home;
