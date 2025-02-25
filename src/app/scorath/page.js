import styles from "@/styles/Project.module.css";
import ParagraphBlock from "@/components/ParagraphBlock";

export default function Scorath() {
	return (
		<div>
			<h1 className={styles.title}>The Scorath</h1>
			<div className={styles.header}>
				<div className={styles.headerText}>
					<p className={styles.headerTopText}>
						It’s a Unique Custom Creature made from a rat, moth, and
						scorpion.
					</p>
					<div>
						<h2>Project Overview</h2>
						<p className={styles.paragraphText}>
							The Scorath is shown with this magazine
							advertisement for a tv documented series. It
							features The Scorath as a deadly and mysterious
							creature. Showing their natural habitats along with
							their dangerous appearance.
						</p>
					</div>
				</div>
				<img
					src="/assets/images/home-scorath.png"
					alt="The Scorath Image"
					className={styles.image}
					layout="responsive"
					width={300}
					height={400}
				/>
			</div>
			<div>
				<h2>Concept Design (2 weeks)</h2>
				<ParagraphBlock
					title="Brainstorming"
					text="The first week was dedicated to brainstorming which three creatures to combine. The idea was to pick one land, one sea, and one flying creature."
				/>
				<ParagraphBlock
					title="Creature Selection"
					text={`Unique parts from three different creatures were chosen to create The Scorath. The Scorath combines a rat's body, a scorpion's tail, and moth wings, resulting in a truly distinct and imaginative creature. The name "Scorath" was formed by merging parts of the scorpion, rat, and moth names into something new and intriguing.`}
				/>
				<div className={styles.imageBlock}>
					<div className={styles.imagesScorath}>
						<img
							src="/assets/images/scorath/rat.png"
							alt="Rat Image"
							width="356"
							height="288"
						/>
						<img
							src="/assets/images/plusSign.png"
							alt="Equal Sign"
							width="39"
							height="39"
						/>
						<img
							src="/assets/images/scorath/scorpion.png"
							alt="Scorpion Image"
							width="305"
							height="288"
						/>
						<img
							src="/assets/images/plusSign.png"
							alt="Rat Image"
							width="39"
							height="39"
						/>
						<img
							src="/assets/images/scorath/moth.png"
							alt="Moth Image"
							width="356"
							height="288"
						/>
					</div>
					<div className={styles.scorath}>
						<img
							src="/assets/images/equalSign.png"
							alt="Equal Sign"
							width="39"
							height="40"
						/>
						<img
							src="/assets/images/scorath/scorath.png"
							alt="Scorath Image"
							width="1120"
							height="376"
						/>
					</div>
				</div>
				<ParagraphBlock
					title="Environment Creation"
					text={`A rocky mountainous area was chosen to reflect the harsh and unforgiving environment The Scorath inhabits. To depict this, an image of rocks and mountains was combined to create the background.`}
				/>
				<div className={`${styles.imagesScorath} ${styles.imageBlock}`}>
					<img
						src="/assets/images/scorath/background.png"
						alt="Background Image"
						width="499"
						height="375"
					/>
					<img
						src="/assets/images/plusSign.png"
						alt="Plus Sign"
						width="39"
						height="39"
					/>
					<img
						src="/assets/images/scorath/stone.png"
						alt="Stone Image"
						width="499"
						height="375"
					/>
				</div>
				<ParagraphBlock
					title="Title Design"
					text={`To grab attention and highlight the Scorath’s importance and danger, the title was designed to look strong and bold. It was further emphasized with red as the font color to evoke a sense of danger and power. `}
				/>
				<div className={`${styles.imagesScorath} ${styles.imageBlock}`}>
					<img
						src="/assets/images/scorath/scorath-title.png"
						alt="Scorath Title"
						width="1000"
						height="220"
					/>
				</div>
				<h2>Refining & Finalizing the Design</h2>
				<ParagraphBlock
					title="Fine-Tuning"
					text={`In the second week, the focus was on fine-tuning the creature, adjusting its placement and appearance to fit better within its environment.`}
				/>
				<ParagraphBlock
					title="Editing"
					text={`Final edits were made to ensure The Scorath still maintained its intimidating presence while fitting seamlessly with the surroundings.`}
				/>
				<div className={styles.software}>
					<h3>Software Used</h3>
					<p>Adobe Photoshop, Adobe Illustrator</p>
				</div>
			</div>
		</div>
	);
}
