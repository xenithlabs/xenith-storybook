import { PropsWithChildren } from '../../../node_modules/react';

export declare const getBgLeafColor: (backgroundColor: string) => string;
export declare const getAccentHoverColor: (accentColor: string) => string;
type MainLayoutPreviewProps = {
    isPreview: true;
    isMobile?: boolean;
};
type MainLayoutHCProps = {
    isPreview?: false;
    isMobile?: never;
};
type MainLayoutProps = {
    backgroundColor: string;
    accentColor: string;
    styleSelector?: string;
} & (MainLayoutPreviewProps | MainLayoutHCProps);
export declare const HCMainLayout: ({ isPreview, isMobile, backgroundColor, accentColor, styleSelector, children, }: PropsWithChildren<MainLayoutProps>) => import("react/jsx-runtime").JSX.Element;
export declare const HCBrandingAndLanguageLayout: ({ className, children, }: PropsWithChildren<{
    className?: string;
}>) => import("react/jsx-runtime").JSX.Element;
export declare const HCBorderBox: ({ children, className, }: PropsWithChildren<{
    className?: string;
}>) => import("react/jsx-runtime").JSX.Element;
export declare const HCBorderBoxHeader: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const HCBrandingBox: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Layout.d.ts.map