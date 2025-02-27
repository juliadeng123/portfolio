import styles from "@/styles/Project.module.css";
import ParagraphBlock from "@/components/ParagraphBlock";
import ButtonLink from "@/components/ButtonLink";
import Carousel from "@/components/Carousel";

export default function Goldibite() {
	const carouselImages = [
		{
			label: "Low Fidelity Ver 1",
			src: "/assets/images/goldibite/lo-fi-1.png",
			alt: "Low Fidelity Ver 1",
		},
		{
			label: "Low Fidelity Ver 2",
			src: "/assets/images/goldibite/lo-fi-2.png",
			alt: "Low Fidelity Ver 2",
		},
		{
			label: "High Fidelity Ver 1",
			src: "/assets/images/goldibite/hi-fi-1.png",
			alt: "High Fidelity Ver 1",
		},
		{
			label: "High Fidelity Ver 2",
			src: "/assets/images/goldibite/hi-fi-2.png",
			alt: "High Fidelity Ver 2",
		},
	];
	return (
		<div>
			<h1 className={styles.title}>GoldiBite</h1>
			<div className={styles.header}>
				<div className={styles.headerText}>
					<p className={styles.headerTopText}>
						A food safety app for travelers with food allergies or
						sensitivities.
					</p>
					<div>
						<h2 className={styles.headerH2}> Project Overview</h2>
						<p className={styles.paragraphText}>
							GoldiBite is a mobile application designed to
							enhance user safety by providing quick and reliable
							assistance in the event of food reactions. The app
							empowers users with tools and resources to respond
							promptly and effectively to unexpected situations,
							ensuring they can handle and prevent emergencies
							with confidence and peace of mind.
						</p>
					</div>
				</div>
				<div className={styles.headerRight}>
					<img
						src="/assets/images/home-goldibite.png"
						alt="GoldiBite Image"
						className={styles.headerImage}
						layout="responsive"
						width={271}
						height={268}
					/>
					<ButtonLink
						link="https://www.figma.com/proto/O6PQwJylJuMtAWuRogJTpD/Screens?node-id=1713-6170&p=f&t=AHszGS096AqBEkwQ-0&scaling=scale-down&content-scaling=fixed&page-id=503%3A1740&starting-point-node-id=519%3A3315&show-proto-sidebar=1"
						linkText="Check out the app!"
					/>
				</div>
			</div>
			<div>
				<h2 className={styles.h2}>GoldiBite Features</h2>
				<ParagraphBlock
					text={
						<>
							<strong>
								Seamless Accessibility & Usability:{" "}
							</strong>
							Designed for everyone, with simple onboarding, clear
							navigation, and a clean layout, making it easy to
							find important information quickly.
						</>
					}
				/>
				<ParagraphBlock
					text={
						<>
							<strong>
								Travel Assistance for Allergy-Safe Experiences:{" "}
							</strong>
							Helps users stay safe while traveling with allergen
							translations, guides, tips, and a menu and product
							scanner with language translations.
						</>
					}
				/>
				<div className={styles.imageBlock}>
					<div className={styles.imagesDisplay}>
						<img
							src="/assets/images/goldibite/features.png"
							alt="GoldiBite Features Image"
							className={`${styles.image} ${styles.imageWide}`}
							width="1000"
							height="460"
						/>
					</div>
				</div>
				<ParagraphBlock title={"Core Values & Impact"} />
				<ol className={styles.orderedList}>
					<li>
						<ParagraphBlock
							text={
								<>
									<strong>Safety First: </strong>Instant
									access to vital allergen information,
									reducing health risks in emergency
									situations.
								</>
							}
						/>
					</li>
					<li>
						<ParagraphBlock
							text={
								<>
									<strong>Global Accessibility: </strong>
									Localized data, emergency hotlines, and
									allergen regulations adapted to different
									regions.
								</>
							}
						/>
					</li>
					<li>
						<ParagraphBlock
							text={
								<>
									<strong>Enhanced Usability: </strong>Unlike
									many food safety apps that overwhelm users,
									GoldiBite is designed for effortless
									navigation and clarity.
								</>
							}
						/>
					</li>
					<li>
						<ParagraphBlock
							text={
								<>
									<strong>Freedom & Confidence: </strong>
									Whether at home or abroad, users can trust
									GoldiBite to help them make safe dining
									decisions with ease.
								</>
							}
						/>
					</li>
				</ol>
				<ButtonLink
					link="https://goldibite-blog.vercel.app/"
					linkText="Check out GoldiBite's Blog!"
				/>
				<div className={styles.imageBlock}>
					<div className={styles.imagesDisplay}>
						<img
							src="/assets/images/goldibite/people-point.png"
							alt="People pointing at a phone screen"
							className={`${styles.image} ${styles.imageWide}`}
							width="1000"
							height="460"
						/>
					</div>
				</div>
				<h2 className={styles.h2}>
					{`Concept Design (4 months - UI/UX Designer)`}
				</h2>
				<ParagraphBlock
					title="Brainstorming and Ideation"
					text={
						"GoldiBite was created to solve a real problem faced by individuals with food allergies and sensitivities. The idea stemmed from the experience from one of our team members’s best friend. She was a 17-year-old diagnosed with celiac disease. Adjusting to a gluten-free diet was challenging, but traveling to Mexico made it even harder. The language barrier and unfamiliar ingredients made every meal stressful, raising concerns about hidden allergens and emergency preparedness. This experience highlighted the need for a reliable food safety solution for travelers."
					}
					text2={
						"To address this, extensive user research on food allergies and dietary restrictions was conducted. User surveys revealed common challenges like reading food labels, dining out safely, and managing allergies while traveling. These insights shaped key features, including an AI-powered food scanner that detects allergens from images, text, and barcodes, reducing manual input. The app also provides a simple onboarding process for setting dietary preferences and receiving personalized recommendations. By making food safety information more accessible, GoldiBite helps users eat confidently and travel without worry."
					}
				/>
				<div className={`${styles.imagesDisplay}`}>
					<div>
						<p className={styles.paragraphTitle}>Scanner</p>
						<img
							src="/assets/images/goldibite/scanner.png"
							alt="Scanner Screen"
							className={`${styles.image}`}
							width="360"
							height="758"
						/>
					</div>
					<img
						src="/assets/images/goldibite/right-arrow.png"
						alt="Right Arrow Sign"
						className={`${styles.rightArrow}`}
						width="60"
						height="84"
					/>
					<div>
						<p className={styles.paragraphTitle}>Scan Results</p>
						<img
							src="/assets/images/goldibite/scan-result.png"
							alt="Scan Result Screen"
							className={`${styles.image}`}
							width="360"
							height="758"
						/>
					</div>
				</div>
				<ParagraphBlock
					title="Design Challenges"
					text={
						"The primary challenge was creating an intuitive and user-friendly interface that enables users to quickly access critical information during emergencies. The design had to strike a balance between simplicity and functionality while seamlessly integrating AI features, ensuring that users could navigate the app easily even in stressful situations. Additionally, incorporating features like Dark Mode required thoughtful design to maintain visual accessibility while reducing eye strain."
					}
					text2={
						"Another key challenge was developing a flexible system that could accommodate diverse user needs, including dietary restrictions and language translations for travelers. It was essential that the app reflected GoldiBite’s core values of personalization, safety, convenience, flexibility, and accessibility."
					}
				/>
				<div className={`${styles.imagesDisplay}`}>
					<div>
						<p className={styles.paragraphTitle}>Settings</p>
						<img
							src="/assets/images/goldibite/settings.png"
							alt="Settings Screen"
							className={`${styles.image}`}
							width="360"
							height="758"
						/>
					</div>
					<div>
						<p className={styles.paragraphTitle}>Emergency</p>
						<img
							src="/assets/images/goldibite/emergency.png"
							alt="Emergency Screen"
							className={`${styles.image}`}
							width="360"
							height="758"
						/>
					</div>
					<div>
						<p className={styles.paragraphTitle}>Menu Results</p>
						<img
							src="/assets/images/goldibite/menu-result.png"
							alt="Menu Result Screen"
							className={`${styles.image}`}
							width="360"
							height="758"
						/>
					</div>
				</div>
				<ParagraphBlock
					title="User Research & Personas"
					text={
						"Through primary research, including a survey of individuals with food allergies, common allergens such as nuts, dairy, and shellfish was identified. To prevent allergic reactions, many respondents rely on meticulous label reading, carrying epinephrine auto-injectors (EPIPEN), and clear communication when dining out or traveling. Secondary research, including discussions on Reddit and relevant blog posts, provided insights into the experiences and restrictions faced by individuals with food allergies and sensitivities. This highlighted the emotional impact of allergies and the need for accessible resources."
					}
					text2={
						"User personas were developed based on the user research done.  Meet Claire and Jackson – two representative users who embody the real-life challenges GoldiBite aims to solve highlighting key user pain points and expectations.. These insights shaped the app’s intuitive workflows and accessibility-first approach."
					}
				/>
				<div className={`${styles.imagesDisplay}`}>
					<div>
						<p className={styles.paragraphTitle}>Claire</p>
						<img
							src="/assets/images/goldibite/claire-1.png"
							alt="Claire Persona Part 1"
							className={`${styles.persona}`}
							width="550"
							height="700"
						/>{" "}
						<img
							src="/assets/images/goldibite/claire-2.png"
							alt="Claire Persona Part 2"
							className={`${styles.persona}`}
							width="550"
							height="700"
						/>
					</div>
				</div>
				<div className={`${styles.imagesDisplay}`}>
					<div>
						<p className={styles.paragraphTitle}>Jackson</p>
						<img
							src="/assets/images/goldibite/jackson-1.png"
							alt="Jackson Persona Part 1"
							className={`${styles.persona}`}
							width="550"
							height="700"
						/>{" "}
						<img
							src="/assets/images/goldibite/jackson-2.png"
							alt="Jackson Persona Part 2"
							className={`${styles.persona}`}
							width="550"
							height="700"
						/>
					</div>
				</div>
				<ParagraphBlock
					title="Designing Wireframes and Prototypes"
					text={`To map out the app’s flow and system process, a site map was created to organize the main features. Low-fidelity wireframes were designed based on this map to visualize the layout. Prototyping these wireframes allowed for usability testing, where testers provided feedback on navigation, readability, and accessibility. Based on this feedback, the prototypes were refined, leading to the creation of a high-fidelity wireframe with a clean, minimalistic design that incorporated the app's branding colors. The final design focused on clear typography, high-contrast visuals, and intuitive icons, ensuring an engaging and user-friendly experience.`}
				/>
				<ButtonLink
					link="https://www.figma.com/board/YEdqSbBVAEBjZBd3B1KDP4/Site-Map?node-id=0-1&p=f&t=JpVHkO77rbvsyzYR-0"
					linkText="Check out GoldiBite's Site Map!"
				/>
				<p className={styles.paragraphTitle}>Wireframes</p>
				<Carousel images={carouselImages} />
				<h2 className={styles.h2}>Refining & Finalizing the Design</h2>
				<ParagraphBlock
					title="Fine-Tuning"
					text={`Several key app features and screens were refined based on user feedback from testing. Additionally, new micro-interactions and animations were integrated to further enhance the overall user experience. The main focus toward the end of the project was on improving the layout, performance, and usability.`}
				/>
				<ParagraphBlock
					title="Editing"
					text={`Internal and external testing helped identify and address issues with interactions, design, and text. After gathering detailed feedback, several improvements were made to enhance usability and ensure a more intuitive experience for users. More A/B testing and external testing were conducted to gather additional insights and continue optimizing the home page. Furthermore, Dark Mode was added, which enhances accessibility, reduces eye strain, and extends battery life.`}
				/>
				<ButtonLink
					link="https://www.figma.com/proto/O6PQwJylJuMtAWuRogJTpD/Screens?node-id=40000001-21489&p=f&t=AHszGS096AqBEkwQ-0&scaling=scale-down&content-scaling=fixed&page-id=503%3A1740&starting-point-node-id=40000001%3A21489&show-proto-sidebar=1"
					linkText="Check out Dark Mode!"
				/>
				<h2 className={styles.h2}>Outcome</h2>
				<ParagraphBlock
					text={`The final design of GoldiBite offers a user-centric experience that prioritizes safety and accessibility. The app's intuitive interface allows users to quickly access vital information during emergencies, and features like Dark Mode enhance usability in various conditions. Through thoughtful design and rigorous testing, GoldiBite effectively supports individuals in managing food-related emergencies with confidence.`}
				/>
				<div className={styles.software}>
					<h3>Software Used</h3>
					<p className={styles.paragraphText}>Figma, Expo, GitHub</p>
				</div>
			</div>
		</div>
	);
}
