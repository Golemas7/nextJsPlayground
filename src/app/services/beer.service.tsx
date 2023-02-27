import { Beer } from '@/app/models/beer.model';

export async function GetBeers({
    page,
    perPage,
}: {
    page?: number;
    perPage?: number;
}) {
    const res = await fetch(
        page && perPage
            ? `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
            : `https://api.punkapi.com/v2/beers`,
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
