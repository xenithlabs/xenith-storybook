import { PropsWithChildren, HTMLAttributes, ReactNode } from '../../../node_modules/react';

interface CountdownProps extends PropsWithChildren {
    initialDuration: number;
    onCountdownEnd: () => void;
    step?: number;
}
export declare const Countdown: ({ initialDuration, step, onCountdownEnd, children, }: CountdownProps) => import("react/jsx-runtime").JSX.Element;
interface CountdownTextProps extends HTMLAttributes<HTMLParagraphElement> {
    icon?: ReactNode;
}
export declare const CountdownText: ({ className, icon, ...props }: CountdownTextProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Countdown.d.ts.map