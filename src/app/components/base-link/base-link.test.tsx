import { render, screen } from '@testing-library/react';
import BaseLink from './base-link';
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

describe('BaseLink', () => {
    it('Should render the link', () => {
        render(<BaseLink href="">Test</BaseLink>);

        const link = screen.getByRole('link');

        expect(link).toBeInTheDocument();
    });

    it('Should render passed link content', () => {
        render(<BaseLink href="">Test Content</BaseLink>);

        const link = screen.getByRole('link', { name: 'Test Content' });

        expect(link).toBeInTheDocument();
    });

    it('Should attach a given class to the component', () => {
        const classToAttach = 'test-class';

        render(
            <BaseLink href="" className={classToAttach}>
                Test Content
            </BaseLink>
        );

        const link = screen.getByRole('link', { name: 'Test Content' });

        expect(link).toHaveClass(classToAttach);
    });

    it('Should add base-link--as-button class if asButton is true', () => {
        render(<BaseLink href="">Test Content</BaseLink>);

        const link = screen.getByRole('link', { name: 'Test Content' });

        expect(link).toHaveClass('baseLinkAsButton');
    });

    it('Should add base-link--small class if size is small', () => {
        render(
            <BaseLink href="" size="small">
                Test Content
            </BaseLink>
        );

        const link = screen.getByRole('link', { name: 'Test Content' });

        expect(link).toHaveClass('baseLinkSmall');
    });

    it('Should add base-link--large class if size is large', () => {
        render(
            <BaseLink href="" size="large">
                Test Content
            </BaseLink>
        );

        const link = screen.getByRole('link', { name: 'Test Content' });

        expect(link).toHaveClass('baseLinkLarge');
    });
});
