import { Beer } from '@/app/models/beer.model';
import BaseAccordionContainer from '@/app/containers/base-accordion-container/base-accordion-container';

import styles from './beer-accordion.module.scss';

export default function BeerAccordion({
    beer,
    initialState,
}: {
    beer: Beer;
    initialState?: boolean;
}) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
    } = beer || {};

    return (
        <BaseAccordionContainer
            className={styles.beerAccordion}
            title={name}
            initialState={initialState}
        >
            <div>
                <h4>{tagline}</h4>
                <p>{description}</p>
                <p className={styles.beerAccordionFirstBrewed}>
                    First brewed: <strong>{firstBrewed}</strong>
                </p>
            </div>
        </BaseAccordionContainer>
    );
}
