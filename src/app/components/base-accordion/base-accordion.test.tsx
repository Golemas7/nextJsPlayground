import { render, screen } from '@testing-library/react';
import BaseAccordion from './base-accordion';
import '@testing-library/jest-dom';

const onClick = jest.fn();

const mockedData = {
    onClick,
    isOpen: false,
    title: 'Test',
};

describe('BaseAccordion', () => {
    it('Should render the accordion', () => {
        render(<BaseAccordion {...mockedData}>Test</BaseAccordion>);

        const accordionContainer = screen.getByTestId('accordionContainer');

        expect(accordionContainer).toBeInTheDocument();
    });

    it('Should add hidden attribute to accordion content if it is not open', () => {
        render(
            <BaseAccordion {...mockedData} isOpen={false}>
                Test content
            </BaseAccordion>
        );

        const accordionContent = screen.getByTestId('accordionContent');

        expect(accordionContent).toHaveAttribute('hidden');
    });

    it('Should not render passed accordion content if it is not open', () => {
        render(
            <BaseAccordion {...mockedData} isOpen={true}>
                Test content
            </BaseAccordion>
        );

        const accordionContent = screen.getByText('Test content');

        expect(accordionContent).toBeInTheDocument();
    });

    it('Should attach a given class to the component', () => {
        const className = 'test-class';

        render(
            <BaseAccordion {...mockedData} className={className}>
                Test
            </BaseAccordion>
        );

        const accordionContainer = screen.getByTestId('accordionContainer');

        expect(accordionContainer).toHaveClass(className);
    });

    it('Should render the title', () => {
        const title = 'test title';

        render(
            <BaseAccordion {...mockedData} title={title}>
                Test
            </BaseAccordion>
        );

        const titleElement = screen.getByText(title);

        expect(titleElement).toBeInTheDocument();
    });

    it('Should render the chevron', () => {
        render(<BaseAccordion {...mockedData}>Test</BaseAccordion>);

        const chevron = screen.getByTestId('chevron');

        expect(chevron).toBeInTheDocument();
    });

    it('Should trigger onClick when clicked', () => {
        const clickMock = jest.fn();

        render(
            <BaseAccordion {...mockedData} onClick={clickMock}>
                Test
            </BaseAccordion>
        );

        const headingRowButton = screen.getByTestId('headingRow');

        headingRowButton.click();

        expect(clickMock).toHaveBeenCalled();
    });
});
