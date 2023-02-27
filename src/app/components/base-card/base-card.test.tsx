import { render, screen } from '@testing-library/react';
import BaseCard from './base-card';
import '@testing-library/jest-dom';

describe('BaseButton', () => {
    it('Should render the card', () => {
        render(<BaseCard />);

        const link = screen.getByRole('link');

        expect(link).toBeInTheDocument();
    });

    it('Should render the image', () => {
        render(<BaseCard />);

        const image = screen.getByRole('image');

        expect(image).toBeInTheDocument();
    });

    it('Should render the title', () => {
        render(<BaseCard />);

        const title = screen.getByRole('title');

        expect(title).toBeInTheDocument();
    });

    it('Should render the tagline', () => {
        render(<BaseCard />);

        const tagline = screen.getByTestId('tagline');

        expect(tagline).toBeInTheDocument();
    });
});
