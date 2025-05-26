export interface TableHeadSortProps {
    columnName: string;
    sortBy: string | null;
    sortOrder: "asc" | "desc" | null;
    onSortChange: (column: string) => void;
}
export declare const getSortButtonProps: ({ columnName, sortBy, sortOrder, onSortChange, }: TableHeadSortProps) => {
    onClick: () => void;
    icon: import("react/jsx-runtime").JSX.Element;
    className: string | undefined;
};
//# sourceMappingURL=sort.d.ts.map