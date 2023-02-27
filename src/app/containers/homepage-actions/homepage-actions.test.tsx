import { render, screen } from '@testing-library/react';
import HomepageActions from './homepage-actions';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
            push: jest.fn(),
        };
    },
}));

describe('HomepageActions', () => {
    it('Should render a primary CTA', () => {
        render(<HomepageActions className="" />);

        const primaryAction = screen.getByText('Choose a beer!');

        expect(primaryAction).toBeInTheDocument();
    });

    it('Should render a secondary CTA', () => {
        render(<HomepageActions className="" />);

        const secondaryAction = screen.getByText('Explore all the details');

        expect(secondaryAction).toBeInTheDocument();
    });

    it('Should render given className', () => {
        const className = 'test-classname';

        render(<HomepageActions className={className} />);

        const container = screen.getByTestId('homepageActionsContainer');

        expect(container).toHaveClass(className);
    });
});
