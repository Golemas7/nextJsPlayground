import { render, screen } from '@testing-library/react';
import BaseCard from './base-card';
import '@testing-library/jest-dom';

const requiredProps = {
    id: 1,
    imageSrc: '/',
    imageAlt: 'Alt text',
    title: 'Test title',
    content: 'Test content',
};

describe('BaseButton', () => {
    it('Should render the card', () => {
        render(<BaseCard {...requiredProps} />);

        const link = screen.getByRole('link');

        expect(link).toBeInTheDocument();
    });

    it('Should render the image', () => {
        render(<BaseCard {...requiredProps} />);

        const image = screen.getByTestId('cardImage');

        expect(image).toBeInTheDocument();
    });

    it('Should render the title', () => {
        render(<BaseCard {...requiredProps} />);

        const title = screen.getByRole('heading');

        expect(title).toBeInTheDocument();
    });

    it('Should render the content', () => {
        render(<BaseCard {...requiredProps} />);

        const content = screen.getByTestId('content');

        expect(content).toBeInTheDocument();
    });
});
