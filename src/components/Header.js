"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Header.module.css";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleNav = () => setIsMenuOpen((prevState) => !prevState);

	return (
		<header>
			<div>
				<Link href={"/"}>
					<Image
						src="/assets/images/logo-white.png"
						width={75}
						height={75}
						alt="White Logo"
					/>
				</Link>
			</div>

			<div className={styles.hamburger} onClick={toggleNav}>
				<Image
					src="/assets/images/menu-icon.png"
					width={39}
					height={40}
					alt="Menu Icon"
				/>
			</div>

			{/* Side Navigation (Mobile Only) */}
			<div
				className={`${styles.sideNav} ${isMenuOpen ? styles.open : ""}`}
			>
				<button
					className={styles.closebtn}
					onClick={() => setIsMenuOpen(false)}
				>
					<Image
						src="/assets/images/menu-close-icon.png"
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
			<ul className={`${styles.navLinks} `}>
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
		</header>
	);
}
