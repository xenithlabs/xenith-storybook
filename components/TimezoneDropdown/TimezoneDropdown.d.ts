import { DropdownMenuContent } from '@/main';
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';

export interface TimezoneDropdownProps extends DropdownMenuProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    value?: string;
    onChange?: (value: string) => void;
    contentProps?: React.ComponentProps<typeof DropdownMenuContent>;
    className?: string;
    placeholder?: string;
    withBrowserTimezoneOption?: boolean;
}
declare const TimezoneDropdown: import('../../../node_modules/react').ForwardRefExoticComponent<TimezoneDropdownProps & import('../../../node_modules/react').RefAttributes<never>>;
export { TimezoneDropdown };
//# sourceMappingURL=TimezoneDropdown.d.ts.map