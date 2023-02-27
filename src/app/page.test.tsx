import { render, screen } from '@testing-library/react';
import Home from './page';
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

describe('page', () => {
    it('Should renders a title', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: 'Welcome to our humble Brewery!',
        });

        expect(heading).toBeInTheDocument();
    });

    it('Should render a sub-title', () => {
        render(<Home />);

        const subTitle = screen.getByTestId('subTitle');

        expect(subTitle).toBeInTheDocument();
    });

    it('Should render actions block', () => {
        render(<Home />);

        const callToActionBlock = screen.getByTestId('callToActionBlock');

        expect(callToActionBlock).toBeInTheDocument();
    });

    it('Should render an accent image 1', () => {
        render(<Home />);

        const accentImage1 = screen.getByTestId('accentImage1');

        expect(accentImage1).toBeInTheDocument();
    });

    it('Should render an accent image 2', () => {
        render(<Home />);

        const accentImage2 = screen.getByTestId('accentImage2');

        expect(accentImage2).toBeInTheDocument();
    });

    it('Should render a watermark', () => {
        render(<Home />);

        const watermark = screen.getByTestId('watermark');

        expect(watermark).toBeInTheDocument();
    });
});
