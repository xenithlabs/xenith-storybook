import { default as React } from '../../../node_modules/react';

interface UseBadgeGroupOverflowParams {
    children: React.ReactNode;
    maxVisible?: number;
    gap: number;
}
interface UseBadgeGroupOverflowReturn {
    containerRef: React.RefObject<HTMLDivElement>;
    visibleCount: number;
    overflowCount: number;
    isCalculating: boolean;
}
export declare const useBadgeGroupOverflow: ({ children, maxVisible, gap, }: UseBadgeGroupOverflowParams) => UseBadgeGroupOverflowReturn;
export {};
//# sourceMappingURL=useBadgeGroupOverflow.d.ts.map