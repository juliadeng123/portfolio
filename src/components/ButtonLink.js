import styles from "@/styles/ButtonLink.module.css";

export default function ButtonLink({ link, linkText }) {
	return (
		<button type="button" className={styles.button}>
			<a href={link}>{linkText} </a>
		</button>
	);
}
