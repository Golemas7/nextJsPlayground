import Link from 'next/link';
import Image from 'next/image';

import HamburgerMenuSvg from '../../../assets/svg/menu-hamburger.svg';
import CloseSvg from '../../../assets/svg/close.svg';

import styles from './navbar.module.scss';

import { usePathname } from 'next/navigation';
import { routes } from '@/app/core/constants/routes';
import BaseButton from '@/app/components/base-button/base-button';

export default function Navbar({
    isMobileMenuOpen,
    onMobileMenuOpen,
    onMobileMenuClose,
}: {
    isMobileMenuOpen: boolean;
    onMobileMenuOpen: ($event: React.MouseEvent<unknown>) => void;
    onMobileMenuClose: ($event: React.MouseEvent<unknown>) => void;
}) {
    const pathName = usePathname();

    return (
        <div
            className={`${styles.mainNav} ${
                isMobileMenuOpen ? styles.mainNavOpen : ''
            }`}
            onClick={($event) => onMobileMenuClose($event)}
        >
            <div
                className={`${styles.mainNavRow} ${
                    isMobileMenuOpen ? styles.mainNavRowOpen : ''
                }`}
            >
                <div className={`${styles.mainNavCol} ${styles.mainNavColS}`}>
                    <Link className={styles.mainNavAppLogo} href={routes.home}>
                        <Image
                            data-testid="appLogo"
                            src="/logo.png"
                            alt="A pint of beer with foam at the top that is running down its side."
                            height="30"
                            width="30"
                        ></Image>
                    </Link>
                </div>

                <nav
                    aria-label="Main navigation"
                    className={`${styles.mainNavCol} ${styles.mainNavColM} ${
                        styles.mainNavColMainNavBar
                    } ${isMobileMenuOpen ? styles.mainNavColOpen : ''}`}
                >
                    <ul
                        className={`${styles.mainNavList} ${styles.mainNavListLarge}`}
                    >
                        <li className={styles.mainNavListItem}>
                            <Link
                                href={routes.home}
                                className={`${styles.mainNavLink} ${
                                    pathName === routes.home
                                        ? styles.mainNavLinkActive
                                        : ''
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className={styles.mainNavListItem}>
                            <Link
                                href={routes.beers}
                                className={`${styles.mainNavLink} ${
                                    pathName === routes.beers
                                        ? styles.mainNavLinkActive
                                        : ''
                                }`}
                            >
                                Beers
                            </Link>
                        </li>
                        <li className={styles.mainNavListItem}>
                            <Link
                                href={routes.beersList}
                                className={`${styles.mainNavLink} ${
                                    pathName === routes.beersList
                                        ? styles.mainNavLinkActive
                                        : ''
                                }`}
                            >
                                List of beers
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className={`${styles.mainNavCol} ${styles.mainNavColS}`}>
                    {/*  TODO add authenticated actions  */}
                </div>

                {!isMobileMenuOpen && (
                    <BaseButton
                        title="Open menu"
                        data-testid="openMenuButton"
                        className={styles.mainNavMobileNavContainer}
                        asIcon={true}
                        onClick={($event) => onMobileMenuOpen($event)}
                    >
                        <HamburgerMenuSvg className={styles.mainNavMobileNav} />
                    </BaseButton>
                )}

                {isMobileMenuOpen && (
                    <BaseButton
                        tabindex={1}
                        title="Close menu"
                        data-testid="closeMenuButton"
                        className={styles.mainNavMobileNavCloseButton}
                        asIcon={true}
                        onClick={($event) => onMobileMenuClose($event)}
                    >
                        <CloseSvg
                            className={styles.mainNavMobileNavCloseButtonIcon}
                        />
                    </BaseButton>
                )}
            </div>
            {isMobileMenuOpen && (
                <div
                    data-testid="menuBackdrop"
                    className={styles.mainNavMobileBackdrop}
                ></div>
            )}
        </div>
    );
}
