export type ChangeEvent = React.ChangeEvent<unknown> & {
    target: { value: string };
};
