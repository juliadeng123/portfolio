import styles from "../page.module.css";
import Image from "next/image";

export const metadata = {
	title: "Contact Me",
	description: "Contact via email or LinkedIn"
};

export default function Contact() {
	return (
		<div className={styles.page}>
			<main className={styles.mainLeft}>
				<h1 className={styles.contact}>Contact</h1>
				<div className={styles.contactInfo}>
					<h2 className={styles.projectDescription}>
						Reach me here:
					</h2>
					<div className="footer-icons contact-col">
						<div className="contact-links">
							<a href="mailto:juliadeng571@gmail.com">
								<div className="logo contact-col">
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
								&nbsp;juliadeng571@gmail.com
							</a>
						</div>
						<div className="contact-links">
							<a href="https://www.linkedin.com/in/julia-deng-0123/">
								<div className="logo contact-col">
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
								&nbsp;LinkedIn
							</a>
						</div>
					</div>
				</div>
				<div className={styles.container}></div>
			</main>
		</div>
	);
}
