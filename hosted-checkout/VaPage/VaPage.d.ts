import { PropsWithChildren } from '../../../node_modules/react';
import { default as Markdown } from 'react-markdown';

interface ReferenceNumberProps {
    label: string;
    value: string;
}
export declare const VAReferenceNumber: ({ label, value }: ReferenceNumberProps) => import("react/jsx-runtime").JSX.Element;
interface VAPaymentDetailProps {
    vaNumberLabel: string;
    vaNumber: string;
    depositAmountLabel: string;
    depositAmount: string;
    referenceLabel: string;
    reference: string;
}
export declare const VAPaymentDetail: ({ vaNumber, vaNumberLabel, depositAmount, depositAmountLabel, reference, referenceLabel, }: VAPaymentDetailProps) => import("react/jsx-runtime").JSX.Element;
interface VAPaymentInstructionsProps extends PropsWithChildren {
    label: string;
}
export declare const VAPaymentInstructions: ({ label, children, }: VAPaymentInstructionsProps) => import("react/jsx-runtime").JSX.Element;
interface VAPaymentInstructionItemProps {
    method: string;
    isLast: boolean;
    instruction: string;
    markdownComp: typeof Markdown;
}
export declare const VAPaymentInstructionItem: ({ method, isLast, instruction, markdownComp: Markdown, }: VAPaymentInstructionItemProps) => import("react/jsx-runtime").JSX.Element;
interface VAAlreadyPaidSectionProps {
    infoText: string;
    buttonText: string;
    onClick?: () => void;
}
export declare const VAAlreadyPaidSection: ({ infoText, buttonText, onClick, }: VAAlreadyPaidSectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=VaPage.d.ts.map