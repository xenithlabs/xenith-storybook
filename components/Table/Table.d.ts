import { ButtonProps } from '../Button/interfaces';
import * as React from "react";
interface StickyProps {
    sticky?: boolean;
    stickyPosition?: "top" | "bottom" | "left" | "right";
}
declare const Table: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableElement> & {
    pagination?: React.ReactNode;
    empty?: React.ReactNode;
} & React.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & React.RefAttributes<HTMLTableRowElement>>;
interface TableHeadProps extends StickyProps {
    buttonProps?: ButtonProps;
}
declare const TableHead: React.ForwardRefExoticComponent<React.ThHTMLAttributes<HTMLTableCellElement> & TableHeadProps & React.RefAttributes<HTMLTableCellElement>>;
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement>, StickyProps {
    action?: React.ReactNode;
    align?: "left" | "center" | "right";
    innerClassName?: string;
}
declare const TableCell: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableCaptionElement> & React.RefAttributes<HTMLTableCaptionElement>>;
interface TableEmptyStateProps {
    title: string;
    subTitle?: string;
    hasReset?: boolean;
    resetText?: string;
    className?: string;
    onReset?: () => void;
}
declare const TableEmptyState: ({ title, subTitle, hasReset, resetText, className, onReset, }: TableEmptyStateProps) => import("react/jsx-runtime").JSX.Element;
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, TableEmptyState, };
//# sourceMappingURL=Table.d.ts.map