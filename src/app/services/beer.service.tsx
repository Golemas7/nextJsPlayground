import { Beer } from '@/app/models/beer.model';

export async function GetBeers() {
    const res = await fetch(
        'https://api.punkapi.com/v2/beers?page=1&per_page=10',
        { cache: 'no-store' } // Will make a request and not cache it
    );

    const data = (await res.json()) as ReadonlyArray<Beer>;

    return data;
}

export async function GetSingleBeer(beerId: string) {
    const res = await fetch(`https://api.punkapi.com/v2/beers?ids=${beerId}`, {
        next: {
            revalidate: 10, // Revalidate every 10s
        },
    });

    const data = (await res.json()) as ReadonlyArray<Beer>;

    return data && data[0];
}
