import { render, screen } from '@testing-library/react';
import Home from './page';
import '@testing-library/jest-dom';

describe('page', () => {
    it('Renders a title', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: 'Home page',
        });

        expect(heading).toBeInTheDocument();
    });
});
