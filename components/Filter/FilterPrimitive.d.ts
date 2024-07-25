import { PropsWithChildren } from '../../../node_modules/react';
import { FilterType } from './interfaces/filter';

interface FilterProps extends PropsWithChildren {
    onApply: (filter: FilterType) => void;
    open?: boolean;
    onOpenChange?: (opened: boolean) => void;
}
declare const FilterProvider: ({ children, onApply }: FilterProps) => import("react/jsx-runtime").JSX.Element;
export { FilterProvider };
//# sourceMappingURL=FilterPrimitive.d.ts.map