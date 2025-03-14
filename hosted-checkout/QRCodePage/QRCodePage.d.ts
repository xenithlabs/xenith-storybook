import { PropsWithChildren } from '../../../node_modules/react';
import { default as Markdown } from 'react-markdown';

export declare const QRCodeWarningBanner: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
interface QRCodePaymentDetailProps {
    depositAmountLabel: string;
    depositAmount: string;
    referenceLabel: string;
    reference: string;
}
export declare const QRCodePaymentDetail: ({ depositAmount, depositAmountLabel, reference, referenceLabel, }: QRCodePaymentDetailProps) => import("react/jsx-runtime").JSX.Element;
interface QRCodeSectionProps extends PropsWithChildren {
    title: string;
}
export declare const QRCodeSection: ({ title, children }: QRCodeSectionProps) => import("react/jsx-runtime").JSX.Element;
interface DownloadQRCodeButtonProps extends PropsWithChildren {
    onClick?: () => void;
}
export declare const DownloadQRCodeButton: ({ children, onClick, }: DownloadQRCodeButtonProps) => import("react/jsx-runtime").JSX.Element;
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