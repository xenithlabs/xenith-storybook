import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const fileUploaderStyles: (props?: ({
    theme?: "neutral" | "accent" | "critical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface FileUploaderProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof fileUploaderStyles> {
    readonly?: boolean;
    error?: boolean;
}
declare const FileUploader: React.ForwardRefExoticComponent<FileUploaderProps & React.RefAttributes<HTMLDivElement>>;
interface FileUploaderInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    subTitle?: string | React.ReactNode;
    titleText?: string | React.ReactNode;
    titleClassName?: string;
    onFilesAdded: (files: File[]) => void;
}
/**
 * @typedef {FileUploaderInputProps} FileUploaderInputProps
 * @property {string} titleText - The title text for the FileUploaderInput component. If specified, it will override the title text before "or browse".
 */
declare const FileUploaderInput: React.ForwardRefExoticComponent<FileUploaderInputProps & React.RefAttributes<HTMLInputElement>>;
declare const AttachmentList: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const AttachmentItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const AttachmentImage: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & React.RefAttributes<HTMLImageElement>>;
declare const AttachmentInner: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface AttachmentNameProps extends React.HTMLAttributes<HTMLDivElement> {
    tooltip?: string | React.ReactNode;
}
declare const AttachmentName: React.ForwardRefExoticComponent<AttachmentNameProps & React.RefAttributes<HTMLDivElement>>;
declare const AttachmentActions: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { FileUploader, FileUploaderInput, AttachmentList, AttachmentItem, AttachmentImage, AttachmentInner, AttachmentName, AttachmentActions, };
//# sourceMappingURL=FileUploader.d.ts.map