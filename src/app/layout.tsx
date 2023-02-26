import '../styles/styles.scss';
import styles from './layout.module.scss';
import NavbarContainer from '@/app/containers/navbar-container/navbar-container';

export const metadata = {
    title: 'Next Beer app',
    description: 'An awesome Beer app',
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function rootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <title>Next Beer app</title>
                <base href="/" />
                <meta httpEquiv="Cache-Control" content="no-cache, no-store" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* TODO add favicons */}
                <link
                    rel="icon"
                    href="../assets/static/favicon.png"
                    type="image/png"
                />
                <link rel="shortcut icon" href="../assets/static/favicon.ico" />
            </head>
            <body>
                <main>
                    <header className={styles.contentToolbar} role="banner">
                        <NavbarContainer />
                    </header>
                    <div className={styles.content}>
                        <div className={styles.contentMain} role="main">
                            {children}
                        </div>
                    </div>
                    <div>{/*  TODO footer  */}</div>
                </main>
            </body>
        </html>
    );
}
