import { ReactNode } from '../../../node_modules/react';

interface TruncateProps {
    children: ReactNode;
    width?: number;
    maxWidth?: number | string;
    withTooltip?: boolean;
    withCopy?: boolean;
    fluid?: boolean;
    middleTruncate?: boolean;
    middleTruncateStartLength?: number;
    middleTruncateEndLength?: number;
}
export declare const Truncate: ({ children, width, withTooltip, withCopy, fluid, maxWidth, middleTruncate, middleTruncateStartLength, middleTruncateEndLength, }: TruncateProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Truncate.d.ts.map