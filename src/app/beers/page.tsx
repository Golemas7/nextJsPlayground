import Link from 'next/link';
import { Beer } from '@/app/models/beer.model';
import { GetBeers } from '@/app/services/beer.service';

export default async function BeersPage() {
    const beers = await GetBeers({ page: 1, perPage: 6 });

    return (
        <div>
            <h1>Beers</h1>

            <div>
                {beers?.map((beer) => (
                    <BeerCard key={beer.id} beer={beer} />
                ))}
            </div>
        </div>
    );
}

function BeerCard({ beer }: { beer: Beer }) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { id, name, tagline, first_brewed } = beer || {};

    return (
        <Link href={`/beers/${id}`}>
            <div>
                <h2>{name}</h2>
                <h5>{tagline}</h5>
                <p>{first_brewed}</p>
            </div>
        </Link>
    );
}
