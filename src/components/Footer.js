import Link from "next/link";
import Image from "next/image";

export default async function Footer() {
    return (
        <footer className=''>
            <Link href={"/"}>
                <Image 
                src="/assets/images/logo-white.png"
                width={125}
                height={125}
                alt="White Logo">
                </Image>
            </Link>
            <div>
                <h2>Find me here</h2>
                <div className="footer-icons">
                <a href="mailto:juliadeng571@gmail.com">
                    <Image 
                    src="/assets/images/mail.png"
                    width={55}
                    height={50}
                    alt="Mail Icon">
                    </Image>
                </a>
                <a href="https://www.linkedin.com/in/julia-deng-0123/">
                    <Image 
                    src="/assets/images/linkedin.png"
                    width={38}
                    height={34}
                    alt="LinkedIn Icon">
                    </Image>
                </a>
                </div>
            </div>
            <ul className=''>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/project"}>Projects</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>
        </footer>
    );
}