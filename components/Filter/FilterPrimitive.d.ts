import { PropsWithChildren } from '../../../node_modules/react';
import { FilterType } from './interfaces/filter';

interface FilterProps<T = unknown> extends PropsWithChildren {
    onApply: (filter: FilterType) => void;
    open?: boolean;
    onOpenChange?: (opened: boolean) => void;
    searchParams?: T;
    onSearchParamsChanged?: (filter: FilterType, updatedParams: T) => {};
}
declare const FilterProvider: ({ children, onApply, searchParams, onSearchParamsChanged, }: FilterProps) => import("react/jsx-runtime").JSX.Element;
export { FilterProvider };
//# sourceMappingURL=FilterPrimitive.d.ts.map