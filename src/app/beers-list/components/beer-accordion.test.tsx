import { render, screen } from '@testing-library/react';
import BeerAccordion from './beer-accordion';
import '@testing-library/jest-dom';
import { Beer } from '@/app/models/beer.model';

const beerMock = {
    name: 'Test beer',
    tagline: 'Testing the beer',
    description: 'Some test description content',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    first_brewed: Date.now().toString(),
} as Beer;

describe('BeerAccordion', () => {
    it('Should render the title if initial state is set to true', () => {
        render(<BeerAccordion beer={beerMock} initialState={true} />);

        const title = screen.getByText(beerMock.name);

        expect(title).toBeInTheDocument();
    });

    it('Should render the title if initial state is set to false', () => {
        render(<BeerAccordion beer={beerMock} initialState={false} />);

        const title = screen.getByText(beerMock.name);

        expect(title).toBeInTheDocument();
    });

    it('Should render the tagline when initial state is set to true', () => {
        render(<BeerAccordion beer={beerMock} initialState={true} />);

        const tagline = screen.getByText(beerMock.tagline);

        expect(tagline).toBeInTheDocument();
    });

    it('Should render the description when initial state is set to true', () => {
        render(<BeerAccordion beer={beerMock} initialState={true} />);

        const description = screen.getByText(beerMock.description);

        expect(description).toBeInTheDocument();
    });

    it('Should render firstBrewed date when initial state is set to true', () => {
        render(<BeerAccordion beer={beerMock} initialState={true} />);

        const firstBrewed = screen.getByText(beerMock.first_brewed);

        expect(firstBrewed).toBeInTheDocument();
    });

    it('Should not render the tagline when initial state is set to false', () => {
        render(<BeerAccordion beer={beerMock} initialState={false} />);

        const tagline = screen.queryByText(beerMock.tagline);

        expect(tagline).not.toBeInTheDocument();
    });

    it('Should not render the description when initial state is set to false', () => {
        render(<BeerAccordion beer={beerMock} initialState={false} />);

        const description = screen.queryByText(beerMock.description);

        expect(description).not.toBeInTheDocument();
    });

    it('Should not render firstBrewed date when initial state is set to false', () => {
        render(<BeerAccordion beer={beerMock} initialState={false} />);

        const firstBrewed = screen.queryByText(beerMock.first_brewed);

        expect(firstBrewed).not.toBeInTheDocument();
    });

    it('Should not render the tagline by default', () => {
        render(<BeerAccordion beer={beerMock} />);

        const tagline = screen.queryByText(beerMock.tagline);

        expect(tagline).not.toBeInTheDocument();
    });

    it('Should not render the description by default', () => {
        render(<BeerAccordion beer={beerMock} />);

        const description = screen.queryByText(beerMock.description);

        expect(description).not.toBeInTheDocument();
    });

    it('Should not render firstBrewed date by default', () => {
        render(<BeerAccordion beer={beerMock} />);

        const firstBrewed = screen.queryByText(beerMock.first_brewed);

        expect(firstBrewed).not.toBeInTheDocument();
    });
});
