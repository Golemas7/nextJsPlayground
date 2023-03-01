import { BaseSelectOptions } from '@/app/models/base-select-option.model';
import { ChangeEvent } from '@/app/models/change.model';

import styles from './base-select.module.scss';

import Chevron from '../../../assets/svg/shevron.svg';

export default function BaseSelect({
    id,
    label,
    options,
    value = 'null',
    className,
    canSelectEmptyValue = true,
    hasEmptyValue = true,
    onChange,
}: {
    id: string;
    label: string;
    options: BaseSelectOptions;
    value: string | number;
    className?: string;
    canSelectEmptyValue?: boolean;
    hasEmptyValue?: boolean;
    onChange: ($event: ChangeEvent) => void;
}) {
    return (
        <div
            data-testid="selectContainer"
            className={`${styles.baseSelect} ${className ? className : ''}`}
        >
            <label
                className={styles.baseSelectLabel}
                data-testid="label"
                htmlFor={id}
            >
                {label}
            </label>
            <div className={styles.baseSelectSelectContainer}>
                <select
                    id={id}
                    value={value}
                    className={styles.baseSelectSelect}
                    onChange={($event) => onChange($event)}
                >
                    {hasEmptyValue && (
                        <option
                            data-testid="defaultOption"
                            key="null"
                            value="null"
                            disabled={!canSelectEmptyValue}
                        >
                            Select
                        </option>
                    )}
                    {options.map(({ value: optionValue, name }, index) => (
                        <option
                            data-testid="option"
                            key={optionValue.toString() + index.toString()}
                            value={optionValue}
                        >
                            {name}
                        </option>
                    ))}
                </select>

                <Chevron
                    data-testid="chevron"
                    className={styles.baseSelectIcon}
                />
            </div>
        </div>
    );
}
