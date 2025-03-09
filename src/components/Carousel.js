"use client";
import { useState, useRef, useEffect } from "react";
import styles from "@/styles/Carousel.module.css";
import Image from "next/image";

export default function Carousel({ images }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleImages, setVisibleImages] = useState(1);
	const carouselRef = useRef(null);
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);

	useEffect(() => {
		const updateVisibleImages = () => {
			setVisibleImages(
				window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3
			);
		};

		updateVisibleImages();
		window.addEventListener("resize", updateVisibleImages);
		return () => window.removeEventListener("resize", updateVisibleImages);
	}, []);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - visibleImages : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1
		);
	};

	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e) => {
		touchEndX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (touchStartX.current - touchEndX.current > 50) {
			handleNext();
		} else if (touchEndX.current - touchStartX.current > 50) {
			handlePrev();
		}
	};

	return (
		<div
			className={styles.carouselContainer}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			<button
				type="button"
				onClick={handlePrev}
				className={styles.arrowButton}
			>
				<Image
					src="/assets/images/left-arrow.png"
					alt="Left Arrow"
					className="iconSign"
					width={34}
					height={34}
				/>
			</button>
			<div className={styles.carouselSlide} ref={carouselRef}>
				{images
					.slice(currentIndex, currentIndex + visibleImages)
					.map((image, index) => (
						<div key={index} className={styles.carouselItem}>
							<p className={styles.imageLabel}>{image.label}</p>
							<Image
								src={image.src}
								alt={image.alt}
								className={styles.image}
								width={360}
								height={712}
							/>
						</div>
					))}
			</div>
			<button
				type="button"
				onClick={handleNext}
				className={styles.arrowButton}
			>
				<Image
					src="/assets/images/right-arrow.png"
					alt="Right Arrow"
					className="iconSign"
					width={34}
					height={34}
				/>
			</button>
		</div>
	);
}
