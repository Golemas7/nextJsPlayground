import { render, screen } from '@testing-library/react';
import Navbar from './navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
    it('Renders the navbar', () => {
        render(<Navbar />);

        const navbar = screen.getByRole('navigation');

        expect(navbar).toBeInTheDocument();
    });

    it('Renders the home link', () => {
        render(<Navbar />);

        const homeLink = screen.getByRole('link', { name: 'Home' });

        expect(homeLink).toBeInTheDocument();
    });

    it('Renders the Beers link', () => {
        render(<Navbar />);

        const beersLink = screen.getByRole('link', { name: 'Beers' });

        expect(beersLink).toBeInTheDocument();
    });

    it('Renders the List of beers link', () => {
        render(<Navbar />);

        const beersListLink = screen.getByRole('link', {
            name: 'List of beers',
        });

        expect(beersListLink).toBeInTheDocument();
    });

    it('Renders the app logo', () => {
        render(<Navbar />);

        const appLogo = screen.getByTestId('appLogo');

        expect(appLogo).toBeInTheDocument();
    });
});
