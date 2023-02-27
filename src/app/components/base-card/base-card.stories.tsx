import BaseCard from './base-card';

export default {
    title: 'Components/BaseCard',
    component: BaseCard,
};

const requiredProps = {
    id: 1,
    imageSrc: '/',
    imageAlt: 'Alt text',
    title: 'Test title',
    content: 'Test content',
};

export const baseCard = () => <BaseCard {...requiredProps} />;
