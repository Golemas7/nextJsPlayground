import { GetBeers } from '@/app/services/beer.service';
import BaseCard from '@/app/components/base-card/base-card';

import styles from './page.module.scss';

export default async function BeersPage() {
    const beers = await GetBeers({ page: 1, perPage: 8 });

    return (
        <div className={styles.beersPage}>
            <h1 className={styles.beersPageTitle}>Beers</h1>

            <div>
                <label>Sort by:</label>
                <select>
                    <option value="null">Select</option>
                    <option value="abv">Alcohol content</option>
                </select>
            </div>

            <div className={styles.beersPageCards}>
                {beers?.map((beer) => (
                    <BaseCard
                        key={beer.id}
                        id={beer.id}
                        title={beer.name}
                        content={beer.tagline}
                        imageSrc={beer.image_url}
                        imageAlt="An image of a beer."
                    />
                ))}
            </div>
        </div>
    );
}
