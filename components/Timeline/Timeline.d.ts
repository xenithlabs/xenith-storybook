import { default as React, PropsWithChildren } from '../../../node_modules/react';

declare const Timeline: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
    pointClassName?: string;
    icon?: React.ReactNode;
    disableVerticalLine?: boolean;
}
declare const TimelineItem: React.ForwardRefExoticComponent<TimelineItemProps & React.RefAttributes<HTMLDivElement>>;
declare const TimelineHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const TimelineTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface TimelineDateProps extends React.HTMLAttributes<HTMLDivElement> {
    date?: string | Date;
    dateFormat?: string;
}
declare const TimelineDate: React.ForwardRefExoticComponent<TimelineDateProps & React.RefAttributes<HTMLDivElement>>;
declare const TimelineDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface TimelineErrorDescriptionJSONProps extends React.HTMLAttributes<HTMLDivElement> {
    description: string;
    hasCopyButton?: boolean;
    copyText?: string;
}
declare const TimelineErrorDescriptionJSON: React.ForwardRefExoticComponent<TimelineErrorDescriptionJSONProps & React.RefAttributes<HTMLDivElement>>;
interface TimelineErrorDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    hasCopyButton?: boolean;
    copyText?: string;
}
declare const TimelineErrorDescription: React.ForwardRefExoticComponent<TimelineErrorDescriptionProps & React.RefAttributes<HTMLDivElement>>;
interface TimelineNotesDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
    user: string;
    shouldNameify?: boolean;
    remarks?: string;
}
declare const TimelineNotesDescription: React.ForwardRefExoticComponent<TimelineNotesDescriptionProps & React.RefAttributes<HTMLDivElement>>;
export declare const TimelineAttachmentsDescription: React.FC<PropsWithChildren>;
interface TimelineAttachmentProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    src: string | undefined;
    onClick?: () => void;
    className?: string;
}
export declare const TimelineAttachment: React.FC<TimelineAttachmentProps>;
interface TimelineFileAttachmentProps {
    filename: string;
    icon?: React.ReactNode;
    url?: string;
    actions?: React.ReactNode;
}
export declare const TimelineFileAttachment: React.FC<TimelineFileAttachmentProps>;
declare const TimelineSkeleton: React.FC;
export { Timeline, TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineDescription, TimelineErrorDescription, TimelineErrorDescriptionJSON, TimelineNotesDescription, TimelineSkeleton, };
//# sourceMappingURL=Timeline.d.ts.map