import styles from "@/styles/Project.module.css";

export default async function ParagraphBlock({ title, text, text2 }) {
	return (
		<div className={styles.paragraphBlock}>
			<h3 className={styles.paragraphTitle}>{title}</h3>
			<p className={styles.paragraphText}>{text}</p>
			<p className={styles.paragraphText}>{text2}</p>
		</div>
	);
}
