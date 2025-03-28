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
		category: ["UI/UX"],
		description:
			"Food safety app for travelers with food allergies or sensitivities",
		image: "/assets/images/home-goldibite.png",
		imageWidth: 303,
		imageHeight: 300,
		color: "#F3A405"
	},
	{
		id: 2,
		title: "CalmQuest",
		page: "calmquest",
		category: ["UI/UX"],
		description:
			"A mental wellness web app where users can self-reflect about their day",
		image: "/assets/images/home-calmquest.png",
		imageWidth: 303,
		imageHeight: 300,
		color: "#AEE2FF"
	},
	{
		id: 3,
		title: "The Scorath",
		page: "scorath",
		category: ["Graphic"],
		description:
			"Magazine advertisement for a unique custom creature made from a rat, scorpion, and moth",
		image: "/assets/images/home-scorath.png",
		imageWidth: 200,
		imageHeight: 300,
		color: "#E70000"
	},
	{
		id: 4,
		title: "Dreamy Fizz",
		page: "dreamyfizz",
		category: ["Graphic"],
		description:
			"Product label design for canned sparkling water with 3 different flavours",
		image: "/assets/images/home-dreamyfizz.png",
		imageWidth: 311,
		imageHeight: 300,
		color: "#ECACCD"
	}
];

export default function Wheel() {
	const [isOpen, setIsOpen] = useState(false);
	const [angle, setAngle] = useState(0);
	const [spinning, setSpinning] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);
	const [firstSpinCompleted, setFirstSpinCompleted] = useState(false);

	const spinWheel = () => {
		const randomAngle = 1440 + Math.floor(Math.random() * 360);
		const selectedIndex = Math.floor(
			(randomAngle % 360) / (360 / projects.length)
		);
		setSpinning(true);
		setAngle(randomAngle);
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
			<div>
				<FerrisWheel
					onClick={() => setIsOpen(true)}
					className={styles.icon}
				/>
			</div>
			{isOpen && (
				<div className={styles.wheelOverlay}>
					<div className={styles.wheelContent}>
						{!firstSpinCompleted && (
							<div
								className={styles.wheel}
								style={{
									transform: `rotate(${angle}deg)`,
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
						<div className={styles.wheelPointer} />

						{!firstSpinCompleted && (
							<button
								onClick={spinWheel}
								disabled={spinning}
								className={styles.spinButton}
							>
								{spinning ? "Spinning..." : "Spin"}
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
