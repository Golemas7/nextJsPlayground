import { BeerSortOptions } from '@/app/beers/functions/beer-sort-functions';
import { SortDirections } from '@/app/core/enums/sort-directions.enum';

export interface BeersSortData {
    sortKey: BeerSortOptions;
    sortDirection: SortDirections;
}
