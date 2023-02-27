import BeerAccordion from './beer-accordion';
import { Beer } from '@/app/models/beer.model';

export default {
    title: 'Components/BeerAccordion',
    component: BeerAccordion,
};

const beer = {
    name: 'Test beer',
    tagline: 'Testing the beer',
    description: 'Some test description content',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    first_brewed: Date.now().toString(),
} as Beer;

export const beerAccordion = () => <BeerAccordion beer={beer} />;
