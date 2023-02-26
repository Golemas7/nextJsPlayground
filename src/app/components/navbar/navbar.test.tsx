import { render, screen } from '@testing-library/react';
import Navbar from './navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
    const onMobileMenuOpen = jest.fn();
    const onMobileMenuClose = jest.fn();

    it('Should render the navbar', () => {
        render(
            <Navbar
                isMobileMenuOpen={false}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const navbar = screen.getByRole('navigation');

        expect(navbar).toBeInTheDocument();
    });

    it('Should render the home link', () => {
        render(
            <Navbar
                isMobileMenuOpen={false}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const homeLink = screen.getByRole('link', { name: 'Home' });

        expect(homeLink).toBeInTheDocument();
    });

    it('Should render the Beers link', () => {
        render(
            <Navbar
                isMobileMenuOpen={false}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const beersLink = screen.getByRole('link', { name: 'Beers' });

        expect(beersLink).toBeInTheDocument();
    });

    it('Should render the List of beers link', () => {
        render(
            <Navbar
                isMobileMenuOpen={false}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const beersListLink = screen.getByRole('link', {
            name: 'List of beers',
        });

        expect(beersListLink).toBeInTheDocument();
    });

    it('Should render the app logo', () => {
        render(
            <Navbar
                isMobileMenuOpen={false}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const appLogo = screen.getByTestId('appLogo');

        expect(appLogo).toBeInTheDocument();
    });

    it('Should render the hamburger menu base-button', () => {
        render(
            <Navbar
                isMobileMenuOpen={false}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const hamburgerMenuIcon = screen.getByTestId('openMenuButton');

        expect(hamburgerMenuIcon).toBeInTheDocument();
    });

    it('Should render the close menu base-button when the mobile menu is open', () => {
        render(
            <Navbar
                isMobileMenuOpen={true}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const closeMenuButton = screen.getByTestId('closeMenuButton');

        expect(closeMenuButton).toBeInTheDocument();
    });

    it('Should render the navbar when the mobile menu is open', () => {
        render(
            <Navbar
                isMobileMenuOpen={true}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const navbar = screen.getByRole('navigation');

        expect(navbar).toBeInTheDocument();
    });

    it('Should render the home link when the mobile menu is open', () => {
        render(
            <Navbar
                isMobileMenuOpen={true}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const homeLink = screen.getByRole('link', { name: 'Home' });

        expect(homeLink).toBeInTheDocument();
    });

    it('Should render the Beers link when the mobile menu is open', () => {
        render(
            <Navbar
                isMobileMenuOpen={true}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const beersLink = screen.getByRole('link', { name: 'Beers' });

        expect(beersLink).toBeInTheDocument();
    });

    it('Should render the List of beers link when the mobile menu is open', () => {
        render(
            <Navbar
                isMobileMenuOpen={true}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const beersListLink = screen.getByRole('link', {
            name: 'List of beers',
        });

        expect(beersListLink).toBeInTheDocument();
    });

    it('Should render the app logo when the mobile menu is open', () => {
        render(
            <Navbar
                isMobileMenuOpen={true}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const appLogo = screen.getByTestId('appLogo');

        expect(appLogo).toBeInTheDocument();
    });

    it('Should render the backdrop when the mobile menu is open', () => {
        render(
            <Navbar
                isMobileMenuOpen={true}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const backdrop = screen.getByTestId('menuBackdrop');

        expect(backdrop).toBeInTheDocument();
    });

    it('Should not render the backdrop when the mobile menu is closed', () => {
        render(
            <Navbar
                isMobileMenuOpen={false}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const backdrop = screen.queryByTestId('menuBackdrop');

        expect(backdrop).not.toBeInTheDocument();
    });

    it('Should close the menu on close base-button click', () => {
        const onMobileMenuCloseMock = jest.fn();

        render(
            <Navbar
                isMobileMenuOpen={true}
                onMobileMenuOpen={onMobileMenuOpen}
                onMobileMenuClose={onMobileMenuCloseMock}
            />
        );

        const closeMenuButton = screen.getByTestId('closeMenuButton');

        closeMenuButton.click();

        expect(onMobileMenuCloseMock).toHaveBeenCalled();
    });

    it('Should open the menu on open base-button click', () => {
        const onMobileMenuOpenMock = jest.fn();

        render(
            <Navbar
                isMobileMenuOpen={false}
                onMobileMenuOpen={onMobileMenuOpenMock}
                onMobileMenuClose={onMobileMenuClose}
            />
        );

        const openMenuButton = screen.getByTestId('openMenuButton');

        openMenuButton.click();

        expect(onMobileMenuOpenMock).toHaveBeenCalled();
    });
});
