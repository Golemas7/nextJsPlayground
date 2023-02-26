import { ReactNode } from 'react';

export default function BaseButton({ children }: { children: ReactNode }) {
    return <div>{children}</div>;
}
