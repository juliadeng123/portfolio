import styles from "@/styles/Project.module.css";
import ParagraphBlock from "@/components/ParagraphBlock";
import ButtonLink from "@/components/ButtonLink";
import Carousel from "@/components/Carousel";

export default function Calmquest() {
	const carouselImages = [
		{
			label: "Starting Screen",
			src: "/assets/images/calmquest/screens/00-landing.png",
			alt: "Starting Screen",
		},
		{
			label: "Home",
			src: "/assets/images/calmquest/screens/01-home.png",
			alt: "Home",
		},
		{
			label: "Avatars",
			src: "/assets/images/calmquest/screens/02-avatar.png",
			alt: "Avatar",
		},
		{
			label: "Frames",
			src: "/assets/images/calmquest/screens/03-frame.png",
			alt: "Frames",
		},
		{
			label: "About",
			src: "/assets/images/calmquest/screens/04-about.png",
			alt: "About",
		},
		{
			label: "Check-In",
			src: "/assets/images/calmquest/screens/05-checkin.png",
			alt: "Check-In",
		},
		{
			label: "Quiz",
			src: "/assets/images/calmquest/screens/06-quiz.png",
			alt: "Quiz",
		},
		{
			label: "Meditation Exercise",
			src: "/assets/images/calmquest/screens/07-meditation.png",
			alt: "Meditation Exercise",
		},
		{
			label: "Mindfulness Exercise",
			src: "/assets/images/calmquest/screens/08-mindfulness.png",
			alt: "Mindfulness Exercise",
		},
		{
			label: "Breathing Exercises",
			src: "/assets/images/calmquest/screens/09-breath.png",
			alt: "Breathing Exercises",
		},
		{
			label: "Exercise Home",
			src: "/assets/images/calmquest/screens/10-exercise.png",
			alt: "Exercise Home",
		},
		{
			label: "Frame Shop",
			src: "/assets/images/calmquest/screens/11-shop-frame.png",
			alt: "Frame Shop",
		},
		{
			label: "Avatar Shop",
			src: "/assets/images/calmquest/screens/12-shop-avatar.png",
			alt: "Avatar Shop",
		},
		{
			label: "Languages",
			src: "/assets/images/calmquest/screens/13-languages.png",
			alt: "Languages",
		},
	];
	return (
		<div>
			<h1 className={styles.title}>CalmQuest</h1>
			<div className={styles.header}>
				<div className={styles.headerText}>
					<p className={styles.headerTopText}>
						A mental wellness web app where users can self-reflect
						about their day.
					</p>
					<div>
						<h2 className={styles.headerH2}> Project Overview</h2>
						<p className={styles.paragraphText}>
							CalmQuest is a mental wellness web app where users
							can complete daily check-ins, and mindfulness and
							meditation exercises. The user will be able to
							collect currency rewards after completing a daily
							check-in.
						</p>
					</div>
				</div>
				<div className={styles.headerRight}>
					<img
						src="/assets/images/home-calmquest.png"
						alt="CalmQuest Image"
						className={styles.headerImage}
						layout="responsive"
						width={271}
						height={268}
					/>
					<ButtonLink
						link="https://calm-quest.vercel.app/"
						linkText="Check out the app!"
					/>
				</div>
			</div>
			<div>
				<h2 className={styles.h2}>
					{`Concept Design (5 months - UI/UX Designer)`}
				</h2>
				<ParagraphBlock
					title="Brainstorming and Ideation"
					text={
						"In the first week, it was required to come up with an informational web app. This led to the idea of a mental health app. For the duration of five months, the design process evolved from initial concepts to final testing and editing. This phase focused on exploring ideas, refining concepts, and iterating on design solutions to create a user-centric product. Continuous brainstorming and ideation also played a key role in shaping the final web app."
					}
				/>
				<ParagraphBlock
					title="App Selection"
					text={
						"CalmQuest was created as the solution to address rising mental health challenges. With an increasing need for an engaging and accessible tool for daily mindfulness and self-reflection, the app was designed to support mental well-being. According to Statistics Canada, perceived life stress is becoming more common. In 2022, 21.8% of Canadians aged 12 and over reported high daily stress, higher than 20.4% from 2020. This data highlighted the importance of providing a resource to help users manage stress and anxiety effectively."
					}
				/>
				<ParagraphBlock
					title="Title Design"
					text={`The title "CalmQuest" was crafted to be bold and inspiring, encapsulating the mission with the phrase, "The quest to conquest stress for a calm mind." This title sets the tone for the entire app, inviting users on a proactive journey toward reducing stress and achieving mental calmness. It reflects a commitment to empowering individuals through mindfulness and self-reflection.`}
				/>
				<ParagraphBlock
					title="Branding & Messaging"
					text={
						"The branding creates a strong visual identity with clear messaging. The flower icon symbolizes calmness and growth, while the color palette features blue for tranquility and reliability and yellow for happiness and positivity. This design reinforces the goal of providing a safe, engaging space for mental well-being and encouraging daily mindfulness practices."
					}
				/>
				<div className={styles.imageBlock}>
					<div className={styles.imagesDisplay}>
						<img
							src="/assets/images/calmquest/branding.png"
							alt="Calmquest Branding"
							className={`${styles.image} ${styles.imageWide}`}
							width="1120"
							height="736"
						/>
					</div>
				</div>

				<ParagraphBlock
					title="App Interface & Visual Design"
					text={
						"The app’s interface was designed with the user in mind, using detailed user profiles and a style guide to maintain consistency. Interactive prototypes and mockups were created to highlight key features. These include personalized avatars and frames that can be purchased with seeds, which are earned through daily check-ins and completing mindfulness and meditation exercises, such as quick routines, helpful links, and videos."
					}
				/>
				<h3 className={styles.paragraphTitle}>
					CalmQuest Main Screens
				</h3>
				<Carousel images={carouselImages} />
				<h2 className={styles.h2}>Refining & Finalizing the Design</h2>
				<ParagraphBlock
					title="Fine-Tuning"
					text={`User testing played a crucial role in the final phases. While most testers had a positive experience, some users had obstacles, such as confusion during onboarding and visual inconsistencies. In response, onboarding instructions, visuals, and the user interface were improved based on user feedback. This process ensured the final design aligned with both CalmQuest’s brand and the functional needs of its users.`}
				/>
				<ParagraphBlock
					title="Editing"
					text={`In the final editing phase, the user interface was polished and content was refined to be consistent throughout the app. Every detail, from typography and layout to interactive features, was adjusted to align with the brand vision and style guide. These final refinements, based on comprehensive testing feedback, resulted in a cohesive, intuitive, and engaging user experience.`}
				/>

				<div className={styles.software}>
					<h3>Software Used</h3>
					<p>Figma, Adobe Illustrator, Next.js, GitHub, Vercel</p>
				</div>
			</div>
		</div>
	);
}
