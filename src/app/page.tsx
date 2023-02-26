// import Image from 'next/image';
// import { Inter } from 'next/font/google';
import styles from './page.module.scss';
// const inter = Inter({ subsets: ['latin'] });

export default function home() {
    return (
        <div>
            <h1 className={styles.title}>Home page</h1>
            <p>Some content</p>
        </div>
    );
}
