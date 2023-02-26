import Link from 'next/link';
import { Beer } from '@/app/models/beer.model';

async function GetBeers() {
    const res = await fetch(
        'https://api.punkapi.com/v2/beers?page=1&per_page=10',
        { cache: 'no-store' } // Will make a request and not cache it
    );

    const data = (await res.json()) as ReadonlyArray<Beer>;

    return data;
}

export default async function BeersListPage() {
    const beers = await GetBeers();

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
