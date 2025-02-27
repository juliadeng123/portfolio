"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
	const projects = [
		{
			id: 1,
			title: "GoldiBite",
			page: "goldibite",
			category: ["UI/UX"],
			description:
				"Food safety app for travelers with food allergies or sensitivities",
			image: "/assets/images/home-goldibite.png",
			imageWidth: 271,
			imageHeight: 268,
		},
		{
			id: 2,
			title: "CalmQuest",
			page: "calmquest",
			category: ["UI/UX"],
			description:
				"A mental wellness web app where users can self-reflect about their day",
			image: "/assets/images/home-calmquest.png",
			imageWidth: 271,
			imageHeight: 268,
		},
		{
			id: 3,
			title: "The Scorath",
			page: "scorath",
			category: ["Graphic"],
			description:
				"Magazine advertisement for a unique custom creature made from a rat, scorpion, and moth",
			image: "/assets/images/home-scorath.png",
			imageWidth: 150,
			imageHeight: 200,
		},
		{
			id: 4,
			title: "Dreamy Fizz",
			page: "dreamyfizz",
			category: ["Graphic"],
			description:
				"Product label design for canned sparkling water with 3 different flavours",
			image: "/assets/images/home-dreamyfizz.png",
			imageWidth: 300,
			imageHeight: 250,
		},
	];

	const filters = ["Featured", "UI/UX", "Graphic"];

	const [selectedFilter, setSelectedFilter] = useState("Featured");

	const filteredProjects =
		selectedFilter === "Featured"
			? projects
			: projects.filter((project) =>
					project.category.includes(selectedFilter)
			  );

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.intro}>
					<h1 className={styles.name}>Julia Deng</h1>
					<h2 className={styles.jobTitle}>
						UI/UX and Graphic Designer
					</h2>
				</div>
				<div className={styles.container} id="projects">
					<div className={styles.filterGroup}>
						{filters.map((filter) => (
							<button
								key={filter}
								className={`${styles.filterButton} ${
									selectedFilter === filter
										? styles.active
										: ""
								}`}
								onClick={() => setSelectedFilter(filter)}
							>
								{filter}
							</button>
						))}
					</div>
					<div className={styles.projectList}>
						{filteredProjects.map((project) => (
							<Link
								href={`/projects/${project.page}`}
								key={project.id}
							>
								<div className={styles.projectCard}>
									<img
										src={project.image}
										alt={project.title}
										className={styles.projectImage}
										width={project.imageWidth}
										height={project.imageHeight}
									/>
									<div className={styles.projectText}>
										<h3 className={styles.projectTitle}>
											{project.title}
										</h3>
										<p
											className={
												styles.projectDescription
											}
										>
											{project.description}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
