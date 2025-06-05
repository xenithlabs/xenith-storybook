import { ReactNode } from '../../../node_modules/react';

export interface SidebarContextType {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    index: number;
    setIndex: (index: number) => void;
}
export declare const SidebarContext: import('../../../node_modules/react').Context<SidebarContextType | undefined>;
export declare const SidebarProvider: ({ children, collapsed, setCollapsed, index, setIndex, }: {
    children: ReactNode;
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    index: number;
    setIndex: (index: number) => void;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SidebarContext.d.ts.map