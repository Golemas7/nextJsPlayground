import { render, screen } from '@testing-library/react';
import BaseSelect from './base-select';
import '@testing-library/jest-dom';

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

describe('BaseSelect', () => {
    it('Should render the select container', () => {
        render(<BaseSelect {...dataMock} />);

        const selectContainer = screen.getByTestId('selectContainer');

        expect(selectContainer).toBeInTheDocument();
    });

    it('Should render the select', () => {
        render(<BaseSelect {...dataMock} />);

        const select = screen.getByRole('combobox');

        expect(select).toBeInTheDocument();
    });

    it('Should render the label', () => {
        render(<BaseSelect {...dataMock} />);

        const label = screen.getByTestId('label');

        expect(label).toBeInTheDocument();
    });

    it('Should render the default option', () => {
        render(<BaseSelect {...dataMock} />);

        const defaultOption = screen.getByTestId('defaultOption');

        expect(defaultOption).toBeInTheDocument();
    });

    it('Should render the passed options into select', () => {
        render(<BaseSelect {...dataMock} />);

        const options = screen.queryAllByTestId('option');

        const optionsValues = options.map((item) => item.getAttribute('value'));
        const optionsToCompare = dataMock.options.map((item) => item.value);

        expect(optionsValues).toEqual(optionsToCompare);
    });

    it('Should attach a given class to the component', () => {
        const classToAttach = 'test-class';

        render(<BaseSelect {...dataMock} className={classToAttach} />);

        const selectContainer = screen.getByTestId('selectContainer');

        expect(selectContainer).toHaveClass(classToAttach);
    });

    it('Should render chevron', () => {
        render(<BaseSelect {...dataMock} />);

        const chevron = screen.getByTestId('chevron');

        expect(chevron).toBeInTheDocument();
    });
});
