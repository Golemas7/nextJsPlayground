import BaseButton from './base-button';

export default {
    title: 'Components/BaseButton',
    component: BaseButton,
};

const onClickMock = () => {};

export const baseButton = () => (
    <BaseButton title="Content" onClick={onClickMock}>
        Content
    </BaseButton>
);
