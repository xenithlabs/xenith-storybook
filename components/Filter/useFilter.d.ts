declare const useFilter: () => {
    filter: import('./interfaces/filter').FilterType;
    setFilterByKey: (key: string, value: null | string | string[]) => void;
    onApply: () => void;
    onReset: (key?: string | undefined) => void;
};
export { useFilter };
//# sourceMappingURL=useFilter.d.ts.map