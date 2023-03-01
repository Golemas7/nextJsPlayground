'use client';

import BaseSelect from '@/app/components/base-select/base-select';
import { BaseSelectOptions } from '@/app/models/base-select-option.model';
import { useState } from 'react';
import { ChangeEvent } from '@/app/models/change.model';

export default function BaseSelectContainer({
    id,
    label,
    options,
    initialValue = 'null',
    canSelectEmptyValue,
    hasEmptyValue,
    className,
    onChange,
}: {
    id: string;
    label: string;
    options: BaseSelectOptions;
    initialValue?: string | number;
    canSelectEmptyValue?: boolean;
    hasEmptyValue?: boolean;
    className?: string;
    onChange?: ($event: ChangeEvent, value: string) => void;
}) {
    const [value, setValue] = useState(initialValue);

    const handleChange = ($event: ChangeEvent) => {
        const newValue = $event.target.value;

        setValue(newValue);

        if (onChange) {
            onChange($event, newValue);
        }
    };

    return (
        <BaseSelect
            id={id}
            label={label}
            options={options}
            value={value}
            canSelectEmptyValue={canSelectEmptyValue}
            hasEmptyValue={hasEmptyValue}
            className={className}
            onChange={($event) => handleChange($event)}
        />
    );
}
