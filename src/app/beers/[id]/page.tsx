import { GetSingleBeer } from '@/app/services/beer.service';

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
