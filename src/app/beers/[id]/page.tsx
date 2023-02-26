import { Beer } from '@/app/models/beer.model';

async function GetSingleBeer(beerId: string) {
    const res = await fetch(`https://api.punkapi.com/v2/beers?ids=${beerId}`, {
        next: {
            revalidate: 10, // Revalidate every 10s
        },
    });

    const data = (await res.json()) as ReadonlyArray<Beer>;

    return data && data[0];
}

export default async function SingleBeerPage({
    params,
}: {
    params: { id: number };
}) {
    const beer = await GetSingleBeer(params.id.toString());

    return (
        <div>
            <h1>beers/{beer.id}</h1>
            <div>
                <h3>{beer.name}</h3>
                <h5>{beer.tagline}</h5>
                <p>{beer.description}</p>
                <p>{beer.first_brewed}</p>
            </div>
        </div>
    );
}
