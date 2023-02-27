import Link from 'next/link';
import Image from 'next/image';

import styles from './base-card.module.scss';

export default function BaseCard({
    id,
    imageSrc,
    imageAlt,
    title,
    content,
    className,
}: {
    id: number;
    imageSrc: string;
    imageAlt: string;
    title: string;
    content: string;
    className?: string;
}) {
    return (
        <Link
            className={`${styles.baseCard} ${className ? className : ''}`}
            href={'/beers/' + id.toString()}
        >
            <div className={styles.baseCardImageContainer}>
                <Image
                    className={styles.baseCardImage}
                    data-testid="cardImage"
                    src={imageSrc}
                    alt={imageAlt}
                    width="250"
                    height="250"
                />
            </div>
            <div className={styles.baseCardInnerContainer}>
                <h3 className={styles.baseCardTitle}>{title}</h3>
                <p data-testid="content" className={styles.baseCardContent}>
                    {content}
                </p>
                <span className={styles.baseCardAdditionalText}>Read more</span>
            </div>
        </Link>
    );
}
