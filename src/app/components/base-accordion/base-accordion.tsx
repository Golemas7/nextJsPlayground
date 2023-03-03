import { ReactNode, useRef } from 'react';

import Chevron from '../../../assets/svg/shevron.svg';
import BaseButton from '@/app/components/base-button/base-button';

import styles from './base-accordion.module.scss';

export default function BaseAccordion({
    children,
    title,
    isOpen,
    className,
    onClick,
}: {
    children: ReactNode;
    title: string;
    isOpen: boolean;
    className?: string;
    onClick: ($event: React.MouseEvent<unknown>) => void;
}) {
    const contentRef = useRef<HTMLDivElement>(null);

    let isContentHidden: boolean | undefined;
    let contentStyle = {
        maxHeight: '0',
    };

    if (isOpen) {
        const contentElement = contentRef.current;

        if (contentElement) {
            const height = `${contentElement.scrollHeight}px`;

            isContentHidden = false;
            contentStyle = { ...contentStyle, maxHeight: height };
        }
    } else {
        isContentHidden = true;
    }

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
                    } ${!isOpen ? styles.baseAccordionChevronClose : ''}`}
                />
            </BaseButton>

            <div
                hidden={isContentHidden}
                data-testid="accordionContent"
                ref={contentRef}
                style={contentStyle}
                className={`${styles.baseAccordionContent} ${
                    isOpen ? styles.baseAccordionContentOpen : ''
                }`}
            >
                {children}
            </div>
        </div>
    );
}
