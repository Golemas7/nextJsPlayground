import { GetBeers } from '@/app/services/beer.service';
import BaseCard from '@/app/components/base-card/base-card';

export default async function BeersPage() {
    const beers = await GetBeers({ page: 1, perPage: 6 });

    return (
        <div>
            <h1>Beers</h1>

            <div>
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
