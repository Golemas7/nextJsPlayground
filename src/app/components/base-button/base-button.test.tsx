import { render, screen } from '@testing-library/react';
import BaseButton from './base-button';
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

describe('BaseButton', () => {
    const onClickMock = jest.fn();

    it('Should render the button', () => {
        render(
            <BaseButton title="Test" onClick={onClickMock}>
                Test
            </BaseButton>
        );

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('Should render passed button content', () => {
        render(
            <BaseButton title="Test" onClick={onClickMock}>
                Test Content
            </BaseButton>
        );

        const button = screen.getByRole('button', { name: 'Test Content' });

        expect(button).toBeInTheDocument();
    });

    it('Should attach a given class to the component', () => {
        const className = 'test-class';

        render(
            <BaseButton
                className={className}
                title="Test"
                onClick={onClickMock}
            >
                Test Content
            </BaseButton>
        );

        const button = screen.getByRole('button', { name: 'Test Content' });

        expect(button).toHaveClass(className);
    });

    it('Should add base-button--small class if size is passed as small', () => {
        render(
            <BaseButton title="Test" size="small" onClick={onClickMock}>
                Test Content
            </BaseButton>
        );

        const button = screen.getByRole('button', { name: 'Test Content' });

        expect(button).toHaveClass('baseButtonSmall');
    });

    it('Should add base-button--medium-large class if size is passed as medium-large', () => {
        render(
            <BaseButton title="Test" size="medium-large" onClick={onClickMock}>
                Test Content
            </BaseButton>
        );

        const button = screen.getByRole('button', { name: 'Test Content' });

        expect(button).toHaveClass('baseButtonMediumLarge');
    });

    it('Should add base-button--large class if size is passed as large', () => {
        render(
            <BaseButton title="Test" size="large" onClick={onClickMock}>
                Test Content
            </BaseButton>
        );

        const button = screen.getByRole('button', { name: 'Test Content' });

        expect(button).toHaveClass('baseButtonLarge');
    });
});
