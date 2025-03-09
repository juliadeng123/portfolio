"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Header.module.css";
import { Sun, Moon } from "lucide-react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(true);

	const toggleNav = () => setIsMenuOpen((prevState) => !prevState);

	useEffect(() => {
		const root = document.documentElement;
		if (isDarkMode) {
			// Dark Mode Colors
			root.style.setProperty("--background-color", "#000000");
			root.style.setProperty("--foreground-color", "#ffffff");
			root.style.setProperty("--light-blue", "#3347b8");
			root.style.setProperty("--blue", "#273582");
			root.style.setProperty("--dark-blue", "#1c2761");
			root.style.setProperty("--bright-red", "#cf2228");
			root.style.setProperty("--red", "#9f2125");
			root.style.setProperty("--dark-red", "#6a1618");
			root.style.setProperty("--light-grey", "#f1f1f1");
			root.style.setProperty("--grey", "#d9d9d9");
			root.style.setProperty("--dark-grey", "#303030");
			root.style.setProperty("--darker-grey", "#151515");
			root.style.setProperty("--filter-background", "#151515");
			root.style.setProperty("--logo-opacity-light", "1");
			root.style.setProperty("--logo-opacity-dark", "0");
			root.style.setProperty("--invert-images", "invert(0%)");
		} else {
			// Light Mode Colors
			root.style.setProperty("--background-color", "#f1f1f1");
			root.style.setProperty("--foreground-color", "#000000");
			root.style.setProperty("--light-blue", "#597ff8");
			root.style.setProperty("--blue", "#4763c8");
			root.style.setProperty("--dark-blue", "#304999");
			root.style.setProperty("--bright-red", "#ff4d4d");
			root.style.setProperty("--red", "#d1363a");
			root.style.setProperty("--dark-red", "#a12729");
			root.style.setProperty("--light-grey", "#f1f1f1");
			root.style.setProperty("--grey", "#303030");
			root.style.setProperty("--dark-grey", "#d9d9d9");
			root.style.setProperty("--darker-grey", "#c0c0c0");
			root.style.setProperty("--filter-background", "#ffffff");
			root.style.setProperty("--logo-opacity-light", "0");
			root.style.setProperty("--logo-opacity-dark", "1");
			root.style.setProperty("--invert-images", "invert(100%)");
		}
	}, [isDarkMode]);

	return (
		<header>
			<div>
				<Link href={"/"}>
					<div className="logo">
						<Image
							src="/assets/images/logo-white.png"
							className="logo-white"
							width={75}
							height={75}
							alt="White Logo"
						/>
						<Image
							src="/assets/images/logo-black.png"
							className="logo-black"
							width={75}
							height={75}
							alt="Black Logo"
						/>
					</div>
				</Link>
			</div>
			<div className={styles.headerRight}>
				<div className={styles.toggle}>
					<Sun className={styles.icon} />
					<label className={styles.switch}>
						<input
							type="checkbox"
							className={styles.toggleInput}
							checked={isDarkMode}
							onChange={() => setIsDarkMode(!isDarkMode)}
						/>
						<span className={styles.slider}></span>
					</label>
					<Moon className={styles.icon} />
				</div>
				<div className={styles.hamburger} onClick={toggleNav}>
					<Image
						src="/assets/images/menu-icon.png"
						className="png-invert"
						width={39}
						height={40}
						alt="Menu Icon"
					/>
				</div>

				{/* Side Navigation (Mobile Only) */}
				<div
					className={`${styles.sideNav} ${
						isMenuOpen ? styles.open : ""
					}`}
				>
					<button
						className={styles.closebtn}
						onClick={() => setIsMenuOpen(false)}
					>
						<Image
							src="/assets/images/menu-close-icon.png"
							className="png-invert"
							width={33.58}
							height={33.66}
							alt="Close Menu Icon"
						/>
					</button>

					{/* Navigation Links in Sidebar (Mobile Only) */}
					<ul>
						<li>
							<Link href={"/"}>Home</Link>
						</li>
						<li>
							<Link href={"/#projects"} scroll={true}>
								Projects
							</Link>
						</li>
						<li>
							<Link href={"/contact"}>Contact</Link>
						</li>
					</ul>
				</div>
				{/* Regular Navigation (Tablet/Desktops) */}
				<ul className={styles.navLinks}>
					<li>
						<Link href={"/"}>Home</Link>
					</li>
					<li>
						<Link href={"/#projects"} scroll={true}>
							Projects
						</Link>
					</li>
					<li>
						<Link href={"/contact"}>Contact</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
