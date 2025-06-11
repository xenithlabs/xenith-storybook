import { default as React, ReactNode, HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
    collapsed?: boolean;
    footer?: ReactNode;
    index?: number;
    setIndex?: (newIndex: number) => void;
    disableCollapsible?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
    shortcut?: string;
}
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>;
interface PrimarySidebarProps extends PropsWithChildren {
    logo?: ReactNode;
}
declare const PrimarySidebar: ({ children, logo }: PrimarySidebarProps) => import("react/jsx-runtime").JSX.Element;
interface SidebarFooterProps extends PropsWithChildren {
    className?: string;
}
declare const SidebarFooter: ({ children, className }: SidebarFooterProps) => import("react/jsx-runtime").JSX.Element;
interface SecondarySidebarProps extends PropsWithChildren {
    className?: string;
}
declare const SecondarySidebar: ({ children, className }: SecondarySidebarProps) => import("react/jsx-runtime").JSX.Element | null;
interface SidebarIndexTriggerProps extends PropsWithChildren {
    className?: string;
    index: number;
}
declare const SidebarIndexTrigger: ({ index, ...props }: SidebarIndexTriggerProps) => import("react/jsx-runtime").JSX.Element;
declare const SidebarHideOnCollapse: ({ children }: PropsWithChildren) => React.ReactNode;
export { Sidebar, SidebarFooter, PrimarySidebar, SecondarySidebar, SidebarIndexTrigger, SidebarHideOnCollapse, };
//# sourceMappingURL=Sidebar.d.ts.map