import { ReactNode } from 'react';

import styles from './base-button.module.scss';
import { BaseButtonSizes } from '@/app/core/types/base-button.types';

export default function BaseButton({
    children,
    title,
    size = 'medium',
    className,
    asLink,
    fullWidth,
    isDisabled,
    onClick,
    dataTestId,
}: {
    children: ReactNode;
    title: string;
    size?: BaseButtonSizes;
    className?: string;
    asLink?: boolean;
    fullWidth?: boolean;
    isDisabled?: boolean;
    onClick: ($event: React.MouseEvent<unknown>) => void;
    dataTestId?: string;
}) {
    return (
        <button
            disabled={isDisabled}
            data-testid={dataTestId}
            className={`${styles.baseButton} ${
                fullWidth ? styles.baseButtonFullWidth : ''
            } ${size === 'small' ? styles.baseButtonSmall : ''}  ${
                size === 'medium-large' ? styles.baseButtonMediumLarge : ''
            } ${size === 'large' ? styles.baseButtonLarge : ''} ${
                className ? className : ''
            } ${asLink ? styles.baseButtonAsLink : ''}`}
            title={title}
            onClick={($event) => onClick($event)}
        >
            {children}
        </button>
    );
}
