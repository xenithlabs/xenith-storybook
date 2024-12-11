import { default as React } from '../../../node_modules/react';

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
declare const TimelineSkeleton: React.FC;
export { Timeline, TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineDescription, TimelineErrorDescription, TimelineErrorDescriptionJSON, TimelineSkeleton, };
//# sourceMappingURL=Timeline.d.ts.map