import { Sheet } from '../Sheet';
import { ComponentPropsWithoutRef } from '../../../node_modules/react';

declare const FilterSheet: {
    (props: ComponentPropsWithoutRef<typeof Sheet>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const FilterSheetContent: import('../../../node_modules/react').ForwardRefExoticComponent<import('@/main').SheetContentProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const FilterSheetResetAll: () => import("react/jsx-runtime").JSX.Element | null;
declare const FilterHeader: () => import("react/jsx-runtime").JSX.Element;
declare const FilterFooter: () => import("react/jsx-runtime").JSX.Element;
declare const FilterTrigger: () => import("react/jsx-runtime").JSX.Element;
export { FilterSheet, FilterSheetContent, FilterSheetResetAll, FilterHeader, FilterFooter, FilterTrigger, };
//# sourceMappingURL=Filter.d.ts.map