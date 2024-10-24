import { default as React } from '../../../node_modules/react';
import { TableRow, TableBody, TableCell } from './Table';

interface TableSkeletonCellProps extends React.HTMLAttributes<HTMLDivElement> {
    tableCellProps?: React.ComponentProps<typeof TableCell>;
}
declare const TableSkeletonCell: React.ForwardRefExoticComponent<TableSkeletonCellProps & React.RefAttributes<HTMLTableCellElement>>;
interface TableSkeletonProps extends React.ComponentProps<typeof TableBody> {
    rows?: number;
    columns?: number;
    skeletonWidth?: string | string[] | readonly string[];
    skeletonHeight?: string | string[] | readonly string[];
    tableRowProps?: React.ComponentProps<typeof TableRow>;
    rightAlignColumns?: number[];
}
declare const TableSkeleton: React.ForwardRefExoticComponent<Omit<TableSkeletonProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
export { TableSkeletonCell, TableSkeleton };
//# sourceMappingURL=TableSkeleton.d.ts.map