import styles from './homepage-actions.module.scss';
import BaseLink from '@/app/components/base-link/base-link';

export default function HomepageActions({ className }: { className: string }) {
    return (
        <div
            data-testid="homepageActionsContainer"
            className={`${styles.homepageActions} ${
                className ? className : ''
            }`}
        >
            <BaseLink
                data-testid="primaryAction"
                className={styles.homepageActionsAction}
                href="/beers"
                asButton={true}
                size="large"
            >
                Choose a beer!
            </BaseLink>
            <BaseLink
                data-testid="secondaryAction"
                className={styles.homepageActionsAction}
                href="/beers-list"
                size="large"
            >
                Explore all the details
            </BaseLink>
        </div>
    );
}
