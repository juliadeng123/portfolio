"use client";
import { usePathname } from "next/navigation";
import Head from "next/head";

export default function MetaData() {
	const pathname = usePathname();

	const pageMetadata = {
		"/": {
			title: "Julia Deng Portfolio",
			description: "UI/UX and Graphic Designer",
		},
		"/projects/goldibite": {
			title: "GoldiBite",
			description: "Food safety app for travelers with food allergies",
		},
		"/projects/calmquest": {
			title: "CalmQuest",
			description: "A mental wellness web app for self-reflection",
		},
		"/projects/scorath": {
			title: "The Scorath",
			description: "Magazine advertisement for a unique custom creature",
		},
		"/projects/dreamyfizz": {
			title: "Dreamy Fizz",
			description: "Product label design for sparkling water",
		},
		"/contact": {
			title: "Contact Me",
			description: "Contact with email or LinkedIn",
		},
	};

	const metadata = pageMetadata[pathname] || pageMetadata["/"];

	return (
		<Head>
			<title>{metadata.title}</title>
			<meta name="description" content={metadata.description} />
		</Head>
	);
}
