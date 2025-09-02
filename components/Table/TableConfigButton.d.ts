export interface ColumnDefinition {
    key: string;
    label: string;
    sticky?: boolean;
}
interface TableConfigButtonProps {
    tableName: string;
    columns: ColumnDefinition[];
    defaultConfig?: {
        order?: string[];
        config?: Record<string, boolean>;
    };
}
export declare const TableConfigButton: ({ tableName, columns, defaultConfig, }: TableConfigButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TableConfigButton.d.ts.map