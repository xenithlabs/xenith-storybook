import { default as React } from '../../../node_modules/react';

declare const Timeline: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
    date: string;
    dateFormat?: string;
    pointClassName?: string;
    eventTitle: React.ReactNode | string;
}
declare const TimelineItem: React.ForwardRefExoticComponent<TimelineItemProps & React.RefAttributes<HTMLDivElement>>;
export { Timeline, TimelineItem };
//# sourceMappingURL=Timeline.d.ts.map