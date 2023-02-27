import { ReactNode } from 'react';
import Link from 'next/link';
import ArrowLong from '../../../assets/svg/arrow-long.svg';

import styles from './base-link.module.scss';

import { BaseButtonSizes } from '@/app/core/types/base-button.types';

export default function BaseLink({
    children,
    href,
    size = 'medium',
    asButton,
    className,
}: {
    children: ReactNode;
    href: string;
    size?: BaseButtonSizes;
    asButton?: boolean;
    className?: string;
}) {
    return (
        <Link
            className={`${styles.baseLink} ${
                size === 'small' ? styles.baseLinkSmall : ''
            } ${size === 'large' ? styles.baseLinkLarge : ''} ${
                asButton ? styles.baseLinkAsButton : ''
            } ${className ? className : ''}`}
            href={href}
        >
            <span className={styles.baseLinkContent}>{children}</span>
            {!asButton && (
                <ArrowLong
                    data-testid="arrowIcon"
                    className={styles.baseLinkArrowIcon}
                />
            )}
        </Link>
    );
}
