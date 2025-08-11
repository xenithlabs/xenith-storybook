import { TimezoneOptionType } from '@/main';

export declare const BROWSER_TIMEZONE_VALUE = "LOCAL";
export declare const getTimezoneOffsetMinutes: (tz: string) => number;
export declare const getTimezoneOffsetString: (tz: string) => string;
export declare const useTimezoneOptions: (withBrowserTimezone?: boolean) => {
    basicOptions: TimezoneOptionType[];
    timezoneOptions: TimezoneOptionType[];
    allTimezoneOptions: TimezoneOptionType[];
};
export declare const getTimezoneOptionValue: (option: unknown | TimezoneOptionType) => string;
//# sourceMappingURL=timezone.d.ts.map