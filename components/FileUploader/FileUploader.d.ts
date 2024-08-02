import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { Attachment } from './interfaces';

declare const fileUploaderStyles: (props?: ({
    theme?: "neutral" | "accent" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface FileUploaderProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof fileUploaderStyles> {
    readonly?: boolean;
}
declare const FileUploader: React.ForwardRefExoticComponent<FileUploaderProps & React.RefAttributes<HTMLDivElement>>;
declare const AttachmentList: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface AttachmentItemProps extends React.HTMLAttributes<HTMLDivElement> {
    attachment: Attachment;
    actions?: React.ReactNode;
}
declare const AttachmentItem: React.ForwardRefExoticComponent<AttachmentItemProps & React.RefAttributes<HTMLDivElement>>;
export { FileUploader, AttachmentList, AttachmentItem };
//# sourceMappingURL=FileUploader.d.ts.map