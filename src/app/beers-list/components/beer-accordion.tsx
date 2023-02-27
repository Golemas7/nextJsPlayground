import { Beer } from '@/app/models/beer.model';
import BaseAccordionContainer from '@/app/containers/base-accordion-container/base-accordion-container';

export default function BeerAccordion({ beer }: { beer: Beer }) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
    } = beer || {};

    return (
        <BaseAccordionContainer title={name}>
            <div>
                <h4>{tagline}</h4>
                <p>{description}</p>
                <p>
                    First brewed: <strong>{firstBrewed}</strong>
                </p>
            </div>
        </BaseAccordionContainer>
    );
}
