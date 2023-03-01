'use client';

import styles from './beers-selection-container.module.scss';
import BaseCard from '@/app/components/base-card/base-card';
import { useState } from 'react';
import { Beers } from '@/app/models/beer.model';

import useSWR from 'swr';
import { SortDirections } from '@/app/core/enums/sort-directions.enum';
import {
    BeerSortOptions,
    updateSort,
} from '@/app/beers/functions/beer-sort-functions';
import BaseButton from '@/app/components/base-button/base-button';
import BaseSelect from '@/app/components/base-select/base-select';
import { directionOptions, options } from '@/app/beers/data/beer-options';
import { BeersSortData } from '@/app/beers/models/beers-sort-data.model';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BeersSelectionContainer() {
    const initialSort = {
        sortKey: BeerSortOptions.null,
        sortDirection: SortDirections.asc,
    };

    const [sort, setSort] = useState<BeersSortData>(initialSort);
    const [sortedData, setSortedData] = useState<Beers | null>(null);

    // Gets the data from the API
    const { data, mutate } = useSWR(
        'https://api.punkapi.com/v2/beers?page=1&per_page=8',
        fetcher
    ) as {
        data: Beers;
        mutate: (data: () => Beers, reRender: boolean) => void;
    };

    // When the data is ready from the API, set sortedData to received data
    const updateSortedData = (beersData: Beers, sortedBeersData: Beers) => {
        mutate(() => {
            setSortedData(sortedBeersData);

            return beersData;
        }, false);
    };

    // Sort the data
    const sortTheData = (newSort: BeersSortData) => {
        setSort(newSort);

        updateSort(data, newSort, updateSortedData);
    };

    return (
        <>
            <div className={styles.sortingContainer}>
                <BaseSelect
                    className={styles.sortingContainerItem}
                    id="sortBy"
                    label="Sort by: "
                    value={sort.sortKey}
                    options={options}
                    onChange={($event) =>
                        sortTheData({
                            sortKey: parseInt($event?.target?.value, 10),
                            sortDirection: sort.sortDirection,
                        })
                    }
                />

                <BaseSelect
                    className={styles.sortingContainerItem}
                    id="sortDirection"
                    label="Direction: "
                    value={sort.sortDirection}
                    hasEmptyValue={false}
                    options={directionOptions}
                    onChange={($event) =>
                        sortTheData({
                            sortKey: sort.sortKey,
                            sortDirection: parseInt($event?.target?.value, 10),
                        })
                    }
                />

                <BaseButton
                    title="Reset sort"
                    size="medium-large"
                    onClick={() => sortTheData(initialSort)}
                >
                    Reset
                </BaseButton>
            </div>

            <div
                key={sort.sortKey.toString() + sort.sortDirection.toString()}
                className={styles.pageCards}
            >
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
