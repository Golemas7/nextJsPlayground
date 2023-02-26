'use client';

import Navbar from '@/app/components/navbar/navbar';
import { useState } from 'react';

export default function NavbarContainer() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggling = (
        $event: React.MouseEvent<unknown>,
        state: boolean
    ) => {
        $event.stopPropagation();

        setIsMobileMenuOpen(state);
    };

    return (
        <Navbar
            isMobileMenuOpen={isMobileMenuOpen}
            onMobileMenuClose={($event) =>
                handleMobileMenuToggling($event, false)
            }
            onMobileMenuOpen={($event) =>
                handleMobileMenuToggling($event, true)
            }
        ></Navbar>
    );
}
