import { BaseSelectOptions } from '@/app/models/base-select-option.model';

export default function BaseSelect({
    id,
    label,
    options,
    value = 'null',
    className,
    onChange,
}: {
    id: string;
    label: string;
    options: BaseSelectOptions;
    value: string;
    className?: string;
    onChange: ($event: React.ChangeEvent<unknown>) => void;
}) {
    return (
        <div
            data-testid="selectContainer"
            className={`${className ? className : ''}`}
        >
            <label data-testid="label" htmlFor={id}>
                {label}
            </label>
            <select id={id} value={value} onChange={onChange}>
                <option data-testid="defaultOption" key="null" value="null">
                    Select
                </option>
                {options.map(({ value: optionValue, name }, index) => (
                    <option
                        data-testid="option"
                        key={optionValue + index.toString()}
                        value={value}
                    >
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
}
