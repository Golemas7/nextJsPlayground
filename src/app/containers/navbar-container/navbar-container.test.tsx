import NavbarContainer from './navbar-container';
import { render } from '@testing-library/react';

describe('NavbarContainer', () => {
    it('Should render the component', () => {
        render(<NavbarContainer />);
    });
});
