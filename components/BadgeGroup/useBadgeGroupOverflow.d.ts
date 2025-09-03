import { default as React } from '../../../node_modules/react';

interface UseBadgeGroupOverflowParams {
    children: React.ReactNode;
    maxVisible?: number;
    gap: number;
    maxBadgeWidth?: number | string;
}
interface UseBadgeGroupOverflowReturn {
    containerRef: React.RefObject<HTMLDivElement>;
    visibleCount: number;
    overflowCount: number;
    isCalculating: boolean;
}
export declare const useBadgeGroupOverflow: ({ children, maxVisible, gap, maxBadgeWidth, }: UseBadgeGroupOverflowParams) => UseBadgeGroupOverflowReturn;
export {};
//# sourceMappingURL=useBadgeGroupOverflow.d.ts.map