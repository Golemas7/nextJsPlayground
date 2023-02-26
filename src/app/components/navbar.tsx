import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div>
            <div>
                <div>
                    <Image
                        data-testid="appLogo"
                        src="/logo.png"
                        alt="A pint of beer with foam at the top that is running down its side."
                        height="64"
                        width="64"
                    ></Image>
                </div>

                <nav aria-label="Main navigation">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/beers">Beers</Link>
                        </li>
                        <li>
                            <Link href="/beers-list">List of beers</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
