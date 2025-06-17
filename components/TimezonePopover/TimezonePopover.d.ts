import { DropdownMenu, DropdownMenuContent } from '@/main';

interface TimezonePopoverProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu> {
    value?: string;
    onChange?: (value: string) => void;
    contentProps?: React.ComponentProps<typeof DropdownMenuContent>;
    className?: string;
    placeholder?: string;
}
declare const TimezonePopover: import('../../../node_modules/react').ForwardRefExoticComponent<TimezonePopoverProps & import('../../../node_modules/react').RefAttributes<never>>;
export { TimezonePopover };
//# sourceMappingURL=TimezonePopover.d.ts.map