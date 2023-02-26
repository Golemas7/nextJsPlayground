import { render, screen } from '@testing-library/react';
import Home from './page';
import '@testing-library/jest-dom';

describe('page', () => {
    it('Should renders a title', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: 'Welcome to our Brewery!',
        });

        expect(heading).toBeInTheDocument();
    });

    it('Should render a sub-title', () => {
        render(<Home />);

        const subTitle = screen.getByTestId('subTitle');

        expect(subTitle).toBeInTheDocument();
    });

    it('Should render a primary CTA', () => {
        render(<Home />);

        const primaryAction = screen.getByTestId('primaryAction');

        expect(primaryAction).toBeInTheDocument();
    });

    it('Should render a secondary CTA', () => {
        render(<Home />);

        const secondaryAction = screen.getByTestId('secondaryAction');

        expect(secondaryAction).toBeInTheDocument();
    });

    it('Should render an accent image', () => {
        render(<Home />);

        const accentImage = screen.getByTestId('accentImage');

        expect(accentImage).toBeInTheDocument();
    });
});
