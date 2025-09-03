import { ReactNode } from '../../../node_modules/react';

interface TruncateProps {
    children: ReactNode;
    width?: number;
    minWidth?: number;
    maxWidth?: number | string;
    withTooltip?: boolean;
    withCopy?: boolean;
    fluid?: boolean;
    middleTruncate?: boolean;
    middleTruncateEndLength?: number;
}
export declare const Truncate: ({ children, width, withTooltip, withCopy, fluid, minWidth, maxWidth, middleTruncate, middleTruncateEndLength, }: TruncateProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Truncate.d.ts.map