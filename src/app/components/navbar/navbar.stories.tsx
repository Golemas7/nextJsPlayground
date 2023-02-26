import NavBar from './navbar';

export default {
    title: 'Components/Navbar',
    component: NavBar,
};

const onMobileMenuOpen = ($event: React.MouseEvent<unknown>) => {
    console.log('$event', $event);
};
const onMobileMenuClose = ($event: React.MouseEvent<unknown>) => {
    console.log('$event', $event);
};

export const navigation = () => (
    <NavBar
        isMobileMenuOpen={false}
        onMobileMenuClose={onMobileMenuOpen}
        onMobileMenuOpen={onMobileMenuClose}
    />
);
