'use client';

import BaseSelectContainer from '@/app/containers/base-select-container/base-select-container';
import styles from '@/app/beers/page.module.scss';
import BaseCard from '@/app/components/base-card/base-card';
import { useState } from 'react';
import { Beers } from '@/app/models/beer.model';

import useSWR from 'swr';
import { BaseSelectOptions } from '@/app/models/base-select-option.model';
import { SortDirections } from '@/app/core/enums/sort-directions.enum';
import {
    BeerSortOptions,
    updateSort,
} from '@/app/beers/containers/beers-selection-container/functions/beer-sort-functions';

const options: BaseSelectOptions = [
    {
        name: 'Alcohol content',
        value: BeerSortOptions.abv,
    },
    {
        name: 'Name',
        value: BeerSortOptions.name,
    },
];

const directionOptions = [
    {
        name: 'Ascending',
        value: SortDirections.asc,
    },
    {
        name: 'Descending',
        value: SortDirections.dsc,
    },
];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BeersSelectionContainer() {
    const [selectedSort, setSelectedSort] = useState<BeerSortOptions>(
        BeerSortOptions.null
    );
    const [selectedSortDirection, setSelectedSortDirection] =
        useState<SortDirections>(SortDirections.asc);
    const [sortedData, setSortedData] = useState<Beers | null>(null);

    const { data, mutate } = useSWR(
        'https://api.punkapi.com/v2/beers?page=1&per_page=8',
        fetcher
    ) as {
        data: Beers;
        mutate: (data: () => Beers, reRender: boolean) => void;
    };

    const updateSortedData = (beersData: Beers, sortedBeersData: Beers) => {
        mutate(() => {
            setSortedData(sortedBeersData);

            return beersData;
        }, false);
    };

    const sort = (
        sortValue: BeerSortOptions,
        sortDirection: SortDirections
    ) => {
        updateSort(
            data,
            sortValue,
            sortDirection,
            setSelectedSort,
            setSelectedSortDirection,
            updateSortedData
        );
    };

    return (
        <>
            <div>
                <BaseSelectContainer
                    id="sortBy"
                    label="Sort by: "
                    initialValue={selectedSort}
                    options={options}
                    onChange={($event, value) =>
                        sort(Number.parseInt(value, 10), selectedSortDirection)
                    }
                />

                <BaseSelectContainer
                    id="sortDirection"
                    label="Direction: "
                    initialValue={selectedSortDirection}
                    hasEmptyValue={false}
                    options={directionOptions}
                    onChange={($event, value) =>
                        sort(selectedSort, Number.parseInt(value, 10))
                    }
                />
            </div>

            <div key={selectedSort} className={styles.beersPageCards}>
                {(sortedData ?? data)?.map((beer) => (
                    <BaseCard
                        key={beer.id}
                        id={beer.id}
                        title={beer.name}
                        content={beer.tagline}
                        imageSrc={beer.image_url}
                        imageAlt="An image of a beer."
                    />
                ))}
            </div>
        </>
    );
}
