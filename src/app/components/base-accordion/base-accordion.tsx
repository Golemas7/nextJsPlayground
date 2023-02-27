import { ReactNode } from 'react';

import Chevron from '../../../assets/svg/shevron.svg';
import BaseButton from '@/app/components/base-button/base-button';

import styles from './base-accordion.module.scss';

export default function BaseAccordion({
    children,
    title,
    isOpen,
    wasOpen,
    className,
    onClick,
}: {
    children: ReactNode;
    title: string;
    isOpen: boolean;
    wasOpen: boolean;
    className?: string;
    onClick: ($event: React.MouseEvent<unknown>) => void;
}) {
    return (
        <div
            data-testid="accordionContainer"
            className={`${styles.baseAccordion} ${className ? className : ''}`}
        >
            <BaseButton
                dataTestId="headingRow"
                className={styles.baseAccordionHeadingRow}
                title={title}
                asLink={true}
                onClick={($event) => onClick($event)}
            >
                <h3 className={styles.baseAccordionTitle}>{title}</h3>
                <Chevron
                    data-testid="chevron"
                    className={`${styles.baseAccordionChevron} ${
                        isOpen ? styles.baseAccordionChevronOpen : ''
                    } ${
                        !isOpen && wasOpen
                            ? styles.baseAccordionChevronClose
                            : ''
                    }`}
                />
            </BaseButton>
            {isOpen && (
                <div>
                    <div className={styles.baseAccordionContent}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
