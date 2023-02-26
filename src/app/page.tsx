import styles from './page.module.scss';

export default function Home() {
    return (
        <div>
            <h1 className={styles.title}>Welcome to our Brewery!</h1>
            <span data-testid="subTitle">
                Finest drinks since King Arthur. Don&apos;t believe us? Come and
                try it!
            </span>
        </div>
    );
}
