'use client';

import styles from '@/app/page.module.scss';
import BaseButton from '@/app/components/base-button/base-button';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

export const handleOnClick = (
    $event: React.MouseEvent<unknown>,
    router: AppRouterInstance
) => {
    $event.stopPropagation();

    router.push('/beers');
};

export default function HomepageActions({ className }: { className: string }) {
    const router = useRouter();

    return (
        <div
            data-testid="homepageActionsContainer"
            className={className ? className : ''}
        >
            <BaseButton
                data-testid="primaryAction"
                className={styles.homePageButton}
                title="Beer overview"
                size="large"
                onClick={($event) => handleOnClick($event, router)}
            >
                Choose a beer!
            </BaseButton>
        </div>
    );
}
