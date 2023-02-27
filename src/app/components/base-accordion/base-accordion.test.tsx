import { render, screen } from '@testing-library/react';
import BaseAccordion from './base-accordion';
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

describe('BaseAccordion', () => {
    it('Should render the accordion', () => {
        render(<BaseAccordion>Test</BaseAccordion>);

        const accordionContainer = screen.getByTestId('accordionContainer');

        expect(accordionContainer).toBeInTheDocument();
    });

    it('Should render passed accordion content', () => {
        render(<BaseAccordion>Test</BaseAccordion>);

        const accordionContent = screen.getByText('Test');

        expect(accordionContent).toBeInTheDocument();
    });

    it('Should attach a given class to the component', () => {
        const className = 'test-class';

        render(<BaseAccordion className={className}>Test</BaseAccordion>);

        const accordionContainer = screen.getByTestId('accordionContainer');

        expect(accordionContainer).toHaveClass(className);
    });
});
