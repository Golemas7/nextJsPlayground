import styles from './page.module.scss';
import BeersSelectionContainer from '@/app/beers/containers/beers-selection-container/beers-selection-container';

export default function BeersPage() {
    return (
        <div className={styles.beersPage}>
            <h1 className={styles.beersPageTitle}>Beers</h1>

            <BeersSelectionContainer />
        </div>
    );
}
