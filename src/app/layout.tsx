import './globals.scss';
import Link from 'next/link';

export const metadata = {
    title: 'Next Beer app',
    description: 'An awesome Beer app',
};

export default function rootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <main>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/notes">Notes</Link>
                    </nav>
                    {children}
                </main>
            </body>
        </html>
    );
}
