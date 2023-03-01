import { Beer, Beers } from '@/app/models/beer.model';
import { SortDirections } from '@/app/core/enums/sort-directions.enum';
import { BeersSortData } from '@/app/beers/models/beers-sort-data.model';

export enum BeerSortOptions {
    'abv',
    'name',
    'null' = 'null',
}

const sortBeersByAbv = (a: Beer, b: Beer) => {
    if (a.abv < b.abv) {
        return -1;
    }

    if (a.abv > b.abv) {
        return 1;
    }

    return 0;
};

const sortBeersByName = (a: Beer, b: Beer) => {
    if (a.name < b.name) {
        return -1;
    }

    if (a.name > b.name) {
        return 1;
    }

    return 0;
};

export const updateSort = (
    currentSortedData: Beers,
    newSort: BeersSortData,
    callbackFn: (sortedBeerData: Beers) => void
) => {
    const { sortKey, sortDirection } = newSort;

    let sortedBeerData: Beers;

    switch (true) {
        case sortKey === BeerSortOptions.abv:
            sortedBeerData = [...currentSortedData].sort(sortBeersByAbv);
            break;
        case sortKey === BeerSortOptions.name:
            sortedBeerData = [...currentSortedData].sort(sortBeersByName);
            break;
        default:
            sortedBeerData = [...currentSortedData];
    }

    if (sortDirection === SortDirections.dsc) {
        sortedBeerData = [...sortedBeerData].reverse();
    }

    callbackFn(sortedBeerData);
};
