import React, { useState } from "react";
import semaforo from "../../img/Semaforo.png"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

function Home() {
	//const [toggle, setToggle] = useState(false);
	const [redPower, setRedPower] = useState(false);
	const [yellowPower, setYellowPower] = useState(false);
	const [greenPower, setGreenPower] = useState(false);

	return (
		<img src="https://imagizer.imageshack.com/img923/6300/lPMSQi.png" className="semaforo background-image">
					<div className="overlay lights d-flex justify-content-center flex-column align-items-center pt-4">
							<div onClick={() => {
								setRedPower(!redPower); 
								setYellowPower(false); 
								setGreenPower(false);}}
								className={`red-on-${redPower}`}
								style={{
									backgroundColor: "red",
									width: "4rem",
									height: "4rem",
									borderRadius: "50%"}}>
							</div>
							<div
								onClick={() => {
								setRedPower(false);
								setYellowPower(!yellowPower);
								setGreenPower(false);
								} }
								className={`yellow-on-${yellowPower}`}
								style={{
									backgroundColor: "yellow",
									width: "4rem",
									height: "4rem",
									borderRadius: "50%"
								}}></div>
							<div
								onClick={() => {
								setRedPower(false);
								setYellowPower(false);
								setGreenPower(!greenPower);
								} }
								className={`green-on-${greenPower}`}
								style={{
									backgroundColor: "green",
									width: "4rem",
									height: "4rem",
									borderRadius: "50%"}}>
							</div>
					</div>
		</img>
	);
}

export default Home;

