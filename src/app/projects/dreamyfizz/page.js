import styles from "@/styles/Project.module.css";
import ParagraphBlock from "@/components/ParagraphBlock";

export const metadata = {
	title: "Dreamy Fizz",
	description: "Product label design for sparkling water",
};

export default function Dreamyfizz() {
	return (
		<div>
			<h1 className={styles.title}>Dreamy Fizz</h1>
			<div className={styles.header}>
				<div className={styles.headerText}>
					<p className={styles.headerTopText}>
						Canned sparkling water featuring 3 different flavours,
						Blueberry, Strawberry, and Lime.
					</p>
					<div>
						<h2 className={styles.headerH2}>Project Overview</h2>
						<p className={styles.paragraphText}>
							Dreamy Fizz is canned sparkling water made with 100%
							natural flavors and contains zero sugar. The
							branding features a bubbly, dreamy theme to reflect
							its refreshing and light nature.
						</p>
					</div>
				</div>
				<div className={styles.headerRight}>
					<img
						src="/assets/images/home-dreamyfizz.png"
						alt="Dreamy Fizz Image"
						className={styles.headerImage}
						layout="responsive"
						width={314}
						height={244}
					/>
				</div>
			</div>
			<div>
				<h2 className={styles.h2}>{`Concept Design (2 weeks)`}</h2>
				<ParagraphBlock
					title="Brainstorming"
					text={
						"The first week focused on brainstorming ideas for a beverage to create a product label for. The goal was to design a visually appealing label that conveyed a sense of fun and dreaminess."
					}
				/>
				<ParagraphBlock
					title="Product Selection"
					text={
						"After considering various options, sparkling water was chosen as the product. It was the perfect choice to create a fun and dreamy beverage."
					}
				/>
				<ParagraphBlock
					title="Flavor Selection"
					text={`Three popular, refreshing fruit flavors was selected: blueberry, strawberry, and lime. These flavors are not only well-loved but also have vibrant, natural colors that complement the bubbly aesthetic.`}
				/>
				<ParagraphBlock
					title="Branding & Messaging"
					text={
						"The branding creates a strong visual identity with clear messaging. The flower icon symbolizes calmness and growth, while the color palette features blue for tranquility and reliability and yellow for happiness and positivity. This design reinforces the goal of providing a safe, engaging space for mental well-being and encouraging daily mindfulness practices."
					}
				/>
				<div className={`${styles.imagesDisplay}`}>
					<div>
						<img
							src="/assets/images/dreamyfizz/blueberry.png"
							alt="Blueberries"
							className={`${styles.image}`}
							width="300"
							height="220"
						/>
					</div>
					<img
						src="/assets/images/dreamyfizz/strawberry.png"
						alt="Strawberries"
						className={`${styles.image}`}
						width="300"
						height="260"
					/>
					<div>
						<img
							src="/assets/images/dreamyfizz/lime.png"
							alt="Limes"
							className={`${styles.image}`}
							width="300"
							height="200"
						/>
					</div>
				</div>
				<ParagraphBlock
					title="Title Design"
					text={
						"This beverage is named “Dreamy Fizz” to highlight both its bubbly nature and its dreamy vibe. To reflect this, round and bubbly typography that evokes the sensation of bubbles was used to create the title. Pink and purple were chosen as the core colors, keeping the design fun, light, and dreamy, while also ensuring the label would stand out on shelves."
					}
				/>
				<ParagraphBlock
					title="Branding & Messaging"
					text={
						"The branding focused on creating a playful and dreamy experience for consumers while highlighting the natural ingredients and health benefits. Dreamy Fizz was marketed as a fizzy, all-natural sparkling water with 100% natural flavors and zero sugar. This messaging targeted health-conscious individuals who wanted a fun, fizzy drink without compromising on wellness. "
					}
				/>
				<ParagraphBlock
					title="Product Image & Visual Design"
					text={
						"Images of each fruit was added for each flavor(blueberry, strawberry, and lime) and placed on colorful backgrounds matching each fruit’s natural colors. Blueberry has a soft blue background, strawberry a light pink, and lime a fresh green. To enhance the dreamy aesthetic, soft cloud images was used in the background and floating bubbles were  scattered across the label design."
					}
				/>
				<div className={styles.imagesDisplayCol}>
					<div className={styles.imagesDisplayLeft}>
						<p className={styles.paragraphTitle}>Blueberry</p>
						<img
							src="/assets/images/dreamyfizz/blueberry-design.png"
							alt="Blueberry Design"
							className={`${styles.image} ${styles.imageWide}`}
							width="1122"
							height="627"
						/>
						<br />
						<p className={styles.paragraphTitle}>Strawberry</p>
						<img
							src="/assets/images/dreamyfizz/strawberry-design.png"
							alt="Strawberry Design"
							className={`${styles.image} ${styles.imageWide}`}
							width="1122"
							height="627"
						/>
						<br />
						<p className={styles.paragraphTitle}>Lime</p>
						<img
							src="/assets/images/dreamyfizz/lime-design.png"
							alt="Lime Design"
							className={`${styles.image} ${styles.imageWide}`}
							width="1122"
							height="627"
						/>
					</div>
				</div>
				<ParagraphBlock
					title="Mockup Creation"
					text={`To visualize how the labels would look on the actual product, a mockup of the product was created by placing the finalized labels on a can template. This step was essential to ensure the design translated well onto the product packaging, and ensuring proportions, text readability, and the overall aesthetic works in a real-world context.`}
				/>
				<div className={`${styles.imagesDisplay} ${styles.imageBlock}`}>
					<img
						src="/assets/images/dreamyfizz/can-mockup.png"
						alt="Can Mockups"
						className={`${styles.image} ${styles.imageWide}`}
						width="956"
						height="448"
					/>
				</div>
				<h2 className={styles.h2}>Refining & Finalizing the Design</h2>
				<ParagraphBlock
					title="Fine-Tuning"
					text={`After reviewing the designs for consistency across flavors, final adjustments were made so that the only significant differences between the labels were the color themes corresponding to each fruit. This approach maintained visual harmony while giving each flavor its distinct identity. The placement of text, color balance, and overall aesthetic were refined to align with the brand's playful and bubbly aesthetic.`}
				/>
				<ParagraphBlock
					title="Editing"
					text={`In the final editing phase, adjustments were made to comply with Canadian product regulations by translating all the text into both English and French, ensuring the label met regulatory requirements.`}
				/>
				<div className={styles.software}>
					<h3>Software Used</h3>
					<p className={styles.paragraphText}>Adobe Photoshop</p>
				</div>
			</div>
		</div>
	);
}
