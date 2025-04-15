declare const useFilter: () => {
    filter: import('./interfaces/filter').FilterType;
    setFilterByKey: (key: string, value: string | string[] | null) => void;
    onApply: () => void;
    onReset: (key?: string | string[] | undefined) => void;
    setOpen: (opened: boolean) => void;
    open: boolean;
    filterCount: number;
};
export { useFilter };
//# sourceMappingURL=useFilter.d.ts.map