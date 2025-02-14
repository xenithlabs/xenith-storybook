import { ReactNode } from '../../../node_modules/react';

interface TruncateProps {
    children: ReactNode;
    width?: number;
    maxWidth?: number | string;
    withTooltip?: boolean;
    withCopy?: boolean;
    fluid?: boolean;
}
export declare const Truncate: ({ children, width, withTooltip, withCopy, fluid, maxWidth, }: TruncateProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Truncate.d.ts.map