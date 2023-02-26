import { ReactNode } from 'react';

import styles from './base-button.module.scss';

export type BaseButtonSizes = 'small' | 'medium' | 'large';

export default function BaseButton({
    children,
    title,
    size = 'medium',
    className,
    onClick,
}: {
    children: ReactNode;
    title: string;
    size?: BaseButtonSizes;
    className?: string;
    onClick: ($event: React.MouseEvent<unknown>) => void;
}) {
    return (
        <button
            className={`${styles.baseButton} ${
                size === 'small' ? styles.baseButtonSmall : ''
            } ${size === 'large' ? styles.baseButtonLarge : ''} ${
                className ? className : ''
            }`}
            title={title}
            onClick={($event) => onClick($event)}
        >
            {children}
        </button>
    );
}
