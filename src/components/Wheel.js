import styles from "@/styles/Wheel.module.css";

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

export default function ButtonLink() {
	return <div className={styles.wheelContainer}>wheel</div>;
}
