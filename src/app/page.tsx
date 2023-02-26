import styles from './page.module.scss';

export default function Home() {
    return (
        <div>
            <h1 className={styles.title}>Home page</h1>
            <p>Some content</p>
        </div>
    );
}
