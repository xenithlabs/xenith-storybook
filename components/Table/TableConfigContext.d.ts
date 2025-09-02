import { ReactNode } from '../../../node_modules/react';

export interface ColumnConfig {
    order: string[];
    config: Record<string, boolean>;
}
export interface TableConfig {
    [tableName: string]: ColumnConfig;
}
export interface TableConfigContextType {
    tableConfig: TableConfig;
    updateColumnOrder: (tableName: string, order: string[]) => void;
    updateColumnVisibility: (tableName: string, columnKey: string, visible: boolean) => void;
    getTableConfig: (tableName: string) => ColumnConfig | undefined;
}
export declare const useTableConfig: () => TableConfigContextType;
interface TableConfigProviderProps {
    children: ReactNode;
    initialConfig?: TableConfig;
}
export declare const TableConfigProvider: ({ children, initialConfig, }: TableConfigProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TableConfigContext.d.ts.map