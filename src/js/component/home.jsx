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
		<div className="position-absolute">
				<img src="https://imagizer.imageshack.com/img923/6300/lPMSQi.png" className="semaforo position-absolute background-image"></img>
					<div className="position-relative lights d-flex justify-content-center flex-column align-items-center pt-4">
							<div onClick={() => {
								setRedPower(!redPower); 
								setYellowPower(false); 
								setGreenPower(false);}}
								className={`red-on-${redPower}`}
								style={{
									backgroundColor: "#DB050C",
									width: "30px",
									height: "37px",
									marginBottom: "10px",
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
									backgroundColor: "#DA9B16",
									width: "30px",
									height: "40px",
									marginTop: "3px",
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
									backgroundColor: "#027D35",
									width: "30px",
									height: "33px",
									marginTop: "12px",
									borderRadius: "50%"}}>
							</div>
					</div>
					</div>
		
	);
}
<p className="leyend">click on trafic light bulbs to turn on</p>
export default Home;

