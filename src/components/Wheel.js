import { useState } from "react";
import styles from "@/styles/Wheel.module.css";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
import { FerrisWheel } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "GoldiBite",
		page: "goldibite",
		description:
			"Food safety app for travelers with food allergies or sensitivities",
		image: "/assets/images/home-goldibite.png",
		imageWidth: 303,
		imageHeight: 300,
		color: "#273582"
	},
	{
		id: 2,
		title: "CalmQuest",
		page: "calmquest",
		description:
			"A mental wellness web app where users can self-reflect about their day",
		image: "/assets/images/home-calmquest.png",
		imageWidth: 303,
		imageHeight: 300,
		color: "#9f2125"
	},
	{
		id: 3,
		title: "The Scorath",
		page: "scorath",
		description:
			"Magazine advertisement for a unique custom creature made from a rat, scorpion, and moth",
		image: "/assets/images/home-scorath.png",
		imageWidth: 200,
		imageHeight: 300,
		color: "#FFFFFF"
	},
	{
		id: 4,
		title: "Dreamy Fizz",
		page: "dreamyfizz",
		description:
			"Product label design for canned sparkling water with 3 different flavours",
		image: "/assets/images/home-dreamyfizz.png",
		imageWidth: 311,
		imageHeight: 300,
		color: "#000000"
	}
];

export default function Wheel() {
	const [isOpen, setIsOpen] = useState(false);
	const [angle, setAngle] = useState(0);
	const [spinning, setSpinning] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);
	const [firstSpinCompleted, setFirstSpinCompleted] = useState(false);

	const spinWheel = () => {
		const randomAngle = 1080 + Math.floor(Math.random() * 360);
		const totalSegments = projects.length;
		const selectedIndex = Math.floor(
			((angle + randomAngle) % 360) / (360 / totalSegments)
		);

		setSpinning(true);
		setAngle((prevAngle) => prevAngle + randomAngle);
		setTimeout(() => {
			setSpinning(false);
			setSelectedProject(projects[selectedIndex]);
			setIsOpen(true);
			setFirstSpinCompleted(true);
		}, 4000);
	};

	const spinAgain = () => {
		setFirstSpinCompleted(false);
		setTimeout(() => {
			spinWheel();
		}, 0);
	};

	const closeOverlay = () => {
		setIsOpen(false);
		setSelectedProject(null);
		setFirstSpinCompleted(false);
	};

	return (
		<div className={styles.wheelContainer}>
			<div className={styles.iconContainer}>
				<p>Spin the wheel!</p>
				<FerrisWheel
					onClick={() => setIsOpen(true)}
					className={styles.icon}
				/>
			</div>
			{isOpen && (
				<div className={styles.wheelOverlay}>
					<div className={styles.wheelContent}>
						<div className={styles.entireWheel}>
							{!firstSpinCompleted && (
								<div
									className={styles.wheel}
									style={{
										transform: `rotate(${angle}deg)`,
										transition: `transform 4s ease-out`,
										background: `conic-gradient(
                    ${projects
						.map(
							(p, i) =>
								`${p.color} ${(i * 100) / projects.length}% ${
									((i + 1) * 100) / projects.length
								}%`
						)
						.join(", ")})`
									}}
								/>
							)}
							{!firstSpinCompleted && (
								<div className={styles.wheelPointer} />
							)}
							<button
								className={styles.closebtn}
								onClick={closeOverlay}
							>
								<Image
									src="/assets/images/menu-close-icon.png"
									className="png-invert"
									width={33.58}
									height={33.66}
									alt="Close Icon"
								/>
							</button>
						</div>
						{!firstSpinCompleted && (
							<button
								onClick={spinWheel}
								disabled={spinning}
								className={styles.spinButton}
							>
								{spinning
									? "Spinning..."
									: "Spin to Explore More!"}
							</button>
						)}

						{firstSpinCompleted && selectedProject && (
							<div className={styles.projectDetails}>
								<img
									src={selectedProject.image}
									alt={selectedProject.title}
									className={styles.projectImage}
								/>
								<h1>{selectedProject.title}</h1>
								<p>{selectedProject.description}</p>
								<br />
								<ButtonLink
									link={`projects/${selectedProject.page}`}
									linkText={`Check out ${selectedProject.title}`}
								/>
								<div>
									<button
										onClick={spinAgain}
										disabled={spinning}
										className={styles.spinButton}
									>
										{spinning
											? "Spinning..."
											: "Spin Again"}
									</button>
									<button
										className={styles.closebtn}
										onClick={closeOverlay}
									>
										<Image
											src="/assets/images/menu-close-icon.png"
											className="png-invert"
											width={33.58}
											height={33.66}
											alt="Close Icon"
										/>
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
