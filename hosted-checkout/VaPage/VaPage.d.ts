import { PropsWithChildren } from '../../../node_modules/react';

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
}
export declare const VAPaymentDetail: ({ vaNumber, vaNumberLabel, depositAmount, depositAmountLabel, }: VAPaymentDetailProps) => import("react/jsx-runtime").JSX.Element;
interface VAPaymentInstructionsProps extends PropsWithChildren {
    label: string;
}
export declare const VAPaymentInstructions: ({ label, children, }: VAPaymentInstructionsProps) => import("react/jsx-runtime").JSX.Element;
interface VAPaymentInstructionItemProps {
    method: string;
    isLast: boolean;
    instruction: string;
}
export declare const VAPaymentInstructionItem: ({ method, isLast, instruction, }: VAPaymentInstructionItemProps) => import("react/jsx-runtime").JSX.Element;
interface VAAlreadyPaidSectionProps {
    infoText: string;
    buttonText: string;
}
export declare const VAAlreadyPaidSection: ({ infoText, buttonText, }: VAAlreadyPaidSectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=VaPage.d.ts.map