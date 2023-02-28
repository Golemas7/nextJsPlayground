import BaseSelect from './base-select';

export default {
    title: 'Components/BaseSelect',
    component: BaseSelect,
};

const dataMock = {
    id: '1',
    label: 'Test label',
    options: [
        {
            name: 'test option 1',
            value: 'test value 1',
        },
        {
            name: 'test option 2',
            value: 'test value 2',
        },
    ],
    value: 'null',
    onChange: jest.fn(),
};

export const baseSelect = () => <BaseSelect {...dataMock} />;
