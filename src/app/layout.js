import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MetaData from "@/components/MetaData";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/assets/images/logo-white.png"
					type="image/png"
					sizes="32x32"
				/>
			</head>
			<body>
				<MetaData />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
