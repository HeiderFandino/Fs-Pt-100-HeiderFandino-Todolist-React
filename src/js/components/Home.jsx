import React from "react";

//include images into your bundle
import { Todolist } from "./Todolist";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
        <Todolist/>   

			
		</div>
	);
};

export default Home;