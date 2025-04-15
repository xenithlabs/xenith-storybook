import { Dispatch, SetStateAction } from '../../../../node_modules/react';

export type FilterValueType = null | string | string[];
export type FilterType = Record<string, FilterValueType>;
export interface FilterContextType {
    filter: FilterType;
    setFilter: Dispatch<SetStateAction<FilterType>>;
    onApply: () => void;
    onReset: (key?: string | string[]) => void;
    setOpen: (opened: boolean) => void;
    open: boolean;
    searchParams?: unknown;
    setFilterByKey: (key: string, value: null | string | string[]) => void;
}
//# sourceMappingURL=filter.d.ts.map