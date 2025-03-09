import Link from "next/link";
import Image from "next/image";

export default async function Footer() {
	return (
		<footer>
			<div className="footer-image">
				<Link href={"/"}>
					<div className="logo">
						<Image
							src="/assets/images/logo-white.png"
							className="footer-image-logo logo-white"
							width={125}
							height={125}
							alt="White Logo"
						/>
						<Image
							src="/assets/images/logo-black.png"
							className="footer-image-logo logo-black"
							width={125}
							height={125}
							alt="Black Logo"
						/>
					</div>
				</Link>
			</div>
			<div className="footer-contact">
				<h2>Find me here</h2>
				<div className="footer-icons">
					<a href="mailto:juliadeng571@gmail.com">
						<div className="logo">
							<Image
								src="/assets/images/mail.png"
								className="logo-white"
								width={50}
								height={50}
								alt="Mail Icon"
							/>
							<Image
								src="/assets/images/mail-black.png"
								className="logo-black"
								width={50}
								height={50}
								alt="Mail Icon"
							/>
						</div>
					</a>
					<a href="https://www.linkedin.com/in/julia-deng-0123/">
						<div className="logo">
							<Image
								src="/assets/images/linkedin.png"
								className="logo-white"
								width={50}
								height={50}
								alt="LinkedIn Icon"
							/>

							<Image
								src="/assets/images/linkedin-black.png"
								className="logo-black"
								width={50}
								height={50}
								alt="LinkedIn Icon"
							/>
						</div>
					</a>
				</div>
			</div>
			<ul className="footer-links">
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
		</footer>
	);
}
