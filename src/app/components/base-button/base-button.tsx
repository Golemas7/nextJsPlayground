import { ReactNode, RefObject } from 'react';

import styles from './base-button.module.scss';
import { BaseButtonSizes } from '@/app/core/types/base-button.types';

export default function BaseButton({
    ref,
    children,
    title,
    size = 'medium',
    className,
    asLink,
    fullWidth,
    isDisabled,
    asIcon,
    onClick,
    dataTestId,
    tabindex = 0,
}: {
    ref?: RefObject<HTMLButtonElement>;
    children: ReactNode;
    title: string;
    size?: BaseButtonSizes;
    className?: string;
    asLink?: boolean;
    fullWidth?: boolean;
    isDisabled?: boolean;
    asIcon?: boolean;
    onClick: ($event: React.MouseEvent<unknown>) => void;
    dataTestId?: string;
    tabindex?: number;
}) {
    return (
        <button
            tabIndex={tabindex}
            ref={ref}
            disabled={isDisabled}
            data-testid={dataTestId}
            className={`${styles.baseButton} ${
                asIcon ? styles.baseButtonAsIcon : ''
            } ${fullWidth ? styles.baseButtonFullWidth : ''} ${
                size === 'small' ? styles.baseButtonSmall : ''
            }  ${size === 'medium-large' ? styles.baseButtonMediumLarge : ''} ${
                size === 'large' ? styles.baseButtonLarge : ''
            } ${className ? className : ''} ${
                asLink ? styles.baseButtonAsLink : ''
            }`}
            title={title}
            onClick={($event) => onClick($event)}
        >
            {children}
        </button>
    );
}
