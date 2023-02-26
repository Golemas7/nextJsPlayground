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
        render(
            <BaseButton title="Test" onClick={onClickMock}>
                Test Content
            </BaseButton>
        );

        const button = screen.getByRole('button', { name: 'Test Content' });

        expect(button).toBeInTheDocument();
    });

    it('Should add base-button--small class if size is passed as small', () => {});

    it('Should add base-button--large class if size is passed as large', () => {});
});
