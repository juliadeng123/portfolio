import Link from "next/link";
import Image from "next/image";

export default async function Header() {
    return (
        <header>
            <div>
                <Link href={"/"}>
                    <Image 
                    src="/assets/images/logo-white.png"
                    width={75}
                    height={75}
                    alt="White Logo">
                    </Image>
                </Link>
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
        </header>
    );
}