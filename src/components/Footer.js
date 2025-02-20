import Link from "next/link";

export default async function Footer() {
    return (
        <footer className=''>
            <h1>Find me here</h1>
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