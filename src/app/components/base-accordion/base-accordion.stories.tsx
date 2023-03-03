import BaseAccordion from './base-accordion';

export default {
    title: 'Components/BaseAccordion',
    component: BaseAccordion,
};

const onClick = () => {};

export const baseAccordion = () => (
    <BaseAccordion onClick={onClick} isOpen={false} title="Title">
        Content
    </BaseAccordion>
);
