import { Sheet } from '../Sheet';
import { ComponentPropsWithoutRef, PropsWithChildren } from '../../../node_modules/react';

declare const FilterSheet: {
    (props: ComponentPropsWithoutRef<typeof Sheet>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const FilterSheetContent: import('../../../node_modules/react').ForwardRefExoticComponent<import('@/main').SheetContentProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const FilterSheetResetAll: () => import("react/jsx-runtime").JSX.Element;
declare const FilterHeader: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
declare const FilterFooter: () => import("react/jsx-runtime").JSX.Element;
declare const FilterTrigger: import('../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-dialog').DialogTriggerProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export { FilterSheet, FilterSheetContent, FilterSheetResetAll, FilterHeader, FilterFooter, FilterTrigger, };
//# sourceMappingURL=Filter.d.ts.map