import { Beer, Beers } from '@/app/models/beer.model';
import { SortDirections } from '@/app/core/enums/sort-directions.enum';
import { Dispatch, SetStateAction } from 'react';

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
    data: Beers,
    value: BeerSortOptions,
    direction: SortDirections,
    setSelectedSort: Dispatch<SetStateAction<BeerSortOptions>>,
    setSelectedSortDirection: Dispatch<SetStateAction<SortDirections>>,
    callbackFn: (data: Beers, sortedBeerData: Beers) => void
) => {
    setSelectedSort(value);
    setSelectedSortDirection(direction);

    let sortedBeerData: Beers;

    switch (true) {
        case value === BeerSortOptions.abv:
            sortedBeerData = [...data].sort(sortBeersByAbv);
            break;
        case value === BeerSortOptions.name:
            sortedBeerData = [...data].sort(sortBeersByName);
            break;
        default:
            sortedBeerData = [...data];
    }

    if (direction === SortDirections.dsc) {
        sortedBeerData = [...sortedBeerData].reverse();
    }

    callbackFn(data, sortedBeerData);
};
