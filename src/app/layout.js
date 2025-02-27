import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Portfolio",
	description: "For Julia Deng :D",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="assets/images/logo-white.png"
					type="image/png"
					sizes="32x32"
				/>
			</head>
			<body>
				<div>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
