import { GetBeers } from '@/app/services/beer.service';

import styles from './page.module.scss';
import BeerAccordion from '@/app/beers-list/components/beer-accordion';

// TODO implement lazy loading or beers
export default async function BeersListPage() {
    const beers = await GetBeers({});

    return (
        <div data-testid="pageContainer" className={styles.beersListPage}>
            <h1 className={styles.beersListPageTitle}>List of beers</h1>

            <div className={styles.beersListPageContent}>
                {beers?.map((beer) => (
                    <BeerAccordion key={beer.id} beer={beer} />
                ))}
            </div>
        </div>
    );
}
