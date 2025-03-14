import { PropsWithChildren } from '../../../node_modules/react';
import { default as Markdown } from 'react-markdown';

export declare const QRCodeWarningBanner: () => import("react/jsx-runtime").JSX.Element;
interface QRCodePaymentDetailProps {
    depositAmountLabel: string;
    depositAmount: string;
    referenceLabel: string;
    reference: string;
}
export declare const QRCodePaymentDetail: ({ depositAmount, depositAmountLabel, reference, referenceLabel, }: QRCodePaymentDetailProps) => import("react/jsx-runtime").JSX.Element;
interface QRCodeSectionProps extends PropsWithChildren {
    label: string;
    downloadButtonLabel: string;
    onDownloadClick?: () => void;
}
export declare const QRCodeSection: ({ label, downloadButtonLabel, onDownloadClick, children, }: QRCodeSectionProps) => import("react/jsx-runtime").JSX.Element;
interface QRCodePaymentInstructionsProps {
    label: string;
    instruction: string;
    markdownComp: typeof Markdown;
}
export declare const QRCodePaymentInstructions: ({ label, instruction, markdownComp: Markdown, }: QRCodePaymentInstructionsProps) => import("react/jsx-runtime").JSX.Element;
interface QRCodeAlreadyPaidSectionProps {
    infoText: string;
    buttonText: string;
    onClick?: () => void;
}
export declare const QRCodeAlreadyPaidSection: ({ infoText, buttonText, onClick, }: QRCodeAlreadyPaidSectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=QRCodePage.d.ts.map