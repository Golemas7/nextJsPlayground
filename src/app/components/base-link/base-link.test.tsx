import { render, screen } from '@testing-library/react';
import BaseLink from './base-link';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
        };
    },
}));

describe('BaseLink', () => {
    it('Should render the link', () => {
        render(<BaseLink>Test</BaseLink>);

        const button = screen.getByRole('link');

        expect(button).toBeInTheDocument();
    });

    it('Should render passed link content', () => {
        render(<BaseLink>Test Content</BaseLink>);

        const button = screen.getByRole('link', { name: 'Test Content' });

        expect(button).toBeInTheDocument();
    });

    it('Should attach a given class to the component', () => {
        render(<BaseLink>Test Content</BaseLink>);

        const button = screen.getByRole('link', { name: 'Test Content' });

        expect(button).toBeInTheDocument();
    });

    it('Should add base-link--as-button class if as button is true', () => {
        render(<BaseLink>Test Content</BaseLink>);

        const button = screen.getByRole('button', { name: 'Test Content' });

        expect(button).toHaveClass('baseButtonSmall');
    });
});
