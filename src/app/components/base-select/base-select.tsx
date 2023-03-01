import { BaseSelectOptions } from '@/app/models/base-select-option.model';
import { ChangeEvent } from '@/app/models/change.model';

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
            className={`${className ? className : ''}`}
        >
            <label data-testid="label" htmlFor={id}>
                {label}
            </label>
            <select
                id={id}
                value={value}
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
        </div>
    );
}
