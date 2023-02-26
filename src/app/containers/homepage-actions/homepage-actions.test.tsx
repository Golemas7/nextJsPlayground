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

        const secondaryAction = screen.getByTestId('secondaryAction');

        expect(secondaryAction).toBeInTheDocument();
    });

    it('Should render given className', () => {
        const className = 'test-classname';

        render(<HomepageActions className={className} />);

        const container = screen.getByTestId('homepageActionsContainer');

        expect(container).toHaveClass(className);
    });

    it('Should call react router on primary CTA click', () => {
        const useRouter = jest.spyOn(require('next/navigation'), 'useRouter');

        render(<HomepageActions className="" />);

        const primaryAction = screen.getByText('Choose a beer!');

        primaryAction.click();

        expect(useRouter).toHaveBeenCalled();
    });

    it('Should call react router on secondary CTA click', () => {
        const useRouter = jest.spyOn(require('next/navigation'), 'useRouter');

        render(<HomepageActions className="" />);

        const secondaryAction = screen.getByTestId('secondaryAction');

        secondaryAction.click();

        expect(useRouter).toHaveBeenCalled();
    });
});
