import { GetBeers } from '@/app/services/beer.service';

import styles from './page.module.scss';
import BeerAccordion from '@/app/beers-list/components/beer-accordion';
import Image from 'next/image';

// TODO implement lazy loading of beers
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

            <Image
                data-testid="watermark"
                className={styles.beersListPageWatermark}
                src="/static/beer-stamp.jpg"
                alt="A beer stamp with the text premium craft beer."
                height="500"
                width="500"
            />
        </div>
    );
}
