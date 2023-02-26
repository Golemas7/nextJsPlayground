import { render, screen } from '@testing-library/react';
import BaseButton from './base-button';
import '@testing-library/jest-dom';

describe('BaseButton', () => {
    it('Should render the button', () => {
        render(<BaseButton>Test</BaseButton>);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('Should render passed button content', () => {
        render(<BaseButton>Test Content</BaseButton>);

        const button = screen.getByRole('button', { name: 'Test Content' });

        expect(button).toBeInTheDocument();
    });
});
