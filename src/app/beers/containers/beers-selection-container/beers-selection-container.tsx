'use client';

import styles from './beers-selection-container.module.scss';
import BaseCard from '@/app/components/base-card/base-card';
import { useEffect, useState } from 'react';
import { Beers } from '@/app/models/beer.model';

import { SortDirections } from '@/app/core/enums/sort-directions.enum';
import {
    BeerSortOptions,
    updateSort,
} from '@/app/beers/functions/beer-sort-functions';
import BaseButton from '@/app/components/base-button/base-button';
import BaseSelect from '@/app/components/base-select/base-select';
import { directionOptions, options } from '@/app/beers/data/beer-options';
import { BeersSortData } from '@/app/beers/models/beers-sort-data.model';
import fetch from 'node-fetch';

export default function BeersSelectionContainer() {
    const initialSort = {
        sortKey: BeerSortOptions.null,
        sortDirection: SortDirections.asc,
    };

    const [page, setPage] = useState(1); // We need this for loading additional data
    const [sort, setSort] = useState<BeersSortData>(initialSort); // The current sort settings
    const [sortedData, setSortedData] = useState<Beers | null>(null); // The accumulated data which is sorted by current sort settings
    const [unsortedData, setUnsortedData] = useState<Beers | null>(null); // The accumulated data which is not sorted - needed for reset functionality

    // Gets the data from the API
    useEffect(() => {
        void fetch(
            `https://api.punkapi.com/v2/beers?page=${page}&per_page=8`
        ).then((res) =>
            res.json().then((data: Beers) => {
                if (!sortedData) {
                    setSortedData(data);
                    setUnsortedData(data);
                } else {
                    setUnsortedData([...(unsortedData as Beers), ...data]);
                    sortTheData(sort, [...sortedData, ...data]);
                }
            })
        );
    }, [page]);

    // When the data is ready from the API, set sortedData to received data
    const updateSortedData = (sortedBeersData: Beers) => {
        setSortedData([...sortedBeersData]);
    };

    // Sort the data
    const sortTheData = (newSort: BeersSortData, dataToSort?: Beers) => {
        // Set the sort state values to new sort values
        setSort(newSort);

        // Use custom data or default to currently sorted data
        const dataToUse = dataToSort ?? (sortedData as Beers);

        // Update the current sort of the data
        updateSort(dataToUse, newSort, updateSortedData);
    };

    // Reset the current sort settings and use the unsorted data
    const resetSort = () => {
        sortTheData(initialSort);
        setSortedData(unsortedData);
    };

    return (
        <>
            {sortedData && (
                <div className={styles.sortingContainer}>
                    <BaseSelect
                        className={styles.sortingContainerItem}
                        id="sortBy"
                        label="Sort by: "
                        value={sort.sortKey}
                        options={options}
                        onChange={($event) =>
                            sortTheData({
                                sortKey:
                                    $event.target.value === BeerSortOptions.null
                                        ? $event.target.value
                                        : parseInt($event?.target?.value, 10),
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
                                sortDirection: parseInt(
                                    $event?.target?.value,
                                    10
                                ),
                            })
                        }
                    />

                    <BaseButton
                        className={styles.sortingContainerButton}
                        title="Reset sort"
                        size="medium-large"
                        onClick={() => resetSort()}
                    >
                        Reset
                    </BaseButton>
                </div>
            )}

            <div
                key={sort.sortKey.toString() + sort.sortDirection.toString()}
                className={styles.pageCards}
            >
                {sortedData?.map((beer) => (
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

            <BaseButton
                className={styles.loadMore}
                title="Load more"
                fullWidth={true}
                isDisabled={!sortedData}
                onClick={() => setPage(page + 1)}
            >
                Load more
            </BaseButton>
        </>
    );
}
