import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	//const [toggle, setToggle] = useState(false);
	const [redPower, setRedPower] = useState(false);
	const [yellowPower, setYellowPower] = useState(false);
	const [greenPower, setGreenPower] = useState(false);
	return (
		<div className="text-center mt-5 d-flex justify-content-center flex-column align-items-center">
			<div
				style={{
					backgroundColor: "black",
					width: "1rem",
					height: "12rem"
				}}></div>
			<div
				style={{
					backgroundColor: "black",
					width: "8rem",
					height: "16rem"
				}}>
				<div className="lights d-flex justify-content-center flex-column align-items-center pt-4">
					<div
						onClick={() => {
							setRedPower(!redPower);
							setYellowPower(false);
							setGreenPower(false);
						}}
						className={`red-on-${redPower}`}
						style={{
							backgroundColor: "red",
							width: "4rem",
							height: "4rem",
							borderRadius: "50%"
						}}></div>
					<div
						onClick={() => {
							setRedPower(false);
							setYellowPower(!yellowPower);
							setGreenPower(false);
						}}
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
						}}
						className={`green-on-${greenPower}`}
						style={{
							backgroundColor: "green",
							width: "4rem",
							height: "4rem",
							borderRadius: "50%"
						}}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;

