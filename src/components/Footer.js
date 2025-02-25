import Link from "next/link";
import Image from "next/image";

export default async function Footer() {
	return (
		<footer>
			<div className="footer-image">
				<Link href={"/"}>
					<Image
						src="/assets/images/logo-white.png"
						className="footer-image-logo"
						width={125}
						height={125}
						alt="White Logo"
					/>
				</Link>
			</div>
			<div className="footer-contact">
				<h2>Find me here</h2>
				<div className="footer-icons">
					<a href="mailto:juliadeng571@gmail.com">
						<Image
							src="/assets/images/mail.png"
							width={50}
							height={50}
							alt="Mail Icon"
						/>
					</a>
					<a href="https://www.linkedin.com/in/julia-deng-0123/">
						<Image
							src="/assets/images/linkedin.png"
							width={50}
							height={50}
							alt="LinkedIn Icon"
						/>
					</a>
				</div>
			</div>
			<ul className="footer-links">
				<li>
					<Link href={"/"}>Home</Link>
				</li>
				<li>
					<Link href={"/project"}>Projects</Link>
				</li>
				<li>
					<Link href={"/contact"}>Contact</Link>
				</li>
			</ul>
		</footer>
	);
}
