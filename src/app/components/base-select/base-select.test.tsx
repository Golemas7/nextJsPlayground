import { render, screen } from '@testing-library/react';
import BaseSelect from './base-select';
import '@testing-library/jest-dom';

describe('BaseSelect', () => {
    it('Should render the select', () => {
        render(<BaseSelect />);

        const select = screen.getByRole('select');

        expect(select).toBeInTheDocument();
    });

    it('Should render the label', () => {
        render(<BaseSelect />);

        const label = screen.getByRole('label');

        expect(label).toBeInTheDocument();
    });

    it('Should render the passed options into select', () => {
        render(<BaseSelect />);

        const options = screen.queryByTestId('option');

        expect(options).toBeInTheDocument();
    });

    it('Should attach a given class to the component', () => {
        const classToAttach = 'test-class';

        render(<BaseSelect />);

        const select = screen.getByRole('select');

        expect(select).toHaveClass(classToAttach);
    });
});
