import { BaseSelectOptions } from '@/app/models/base-select-option.model';
import { BeerSortOptions } from '@/app/beers/functions/beer-sort-functions';
import { SortDirections } from '@/app/core/enums/sort-directions.enum';

export const options: BaseSelectOptions = [
    {
        name: 'Alcohol content',
        value: BeerSortOptions.abv,
    },
    {
        name: 'Name',
        value: BeerSortOptions.name,
    },
];

export const directionOptions = [
    {
        name: 'Ascending',
        value: SortDirections.asc,
    },
    {
        name: 'Descending',
        value: SortDirections.dsc,
    },
];
