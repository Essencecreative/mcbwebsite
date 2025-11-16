import Link from "next/link"

export default function Menu() {
    return (
        <>

            <ul className="main-menu__list one-page-scroll-menu">
                <li className="scrollToLink">
                    <Link href="#home">Home</Link>
                </li>
                <li className="scrollToLink">
                    <Link href="#about">About</Link>
                </li>
                <li className="scrollToLink">
                    <Link href="#service">Services</Link>
                </li>
                <li className="scrollToLink">
                    <Link href="#news">News</Link>
                </li>
                <li className="scrollToLink">
                    <Link href="#contact">Get In Touch</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                    <li>
                        <Link href="/">Home Page 01</Link>
                    </li>
                    <li>
                        <Link href="/index-2">Home Page 02</Link>
                    </li>
                    <li>
                        <Link href="/index-3">Home Page 03</Link>
                    </li>
                    </ul>
                </li>
                </ul>
        </>
    )
}
