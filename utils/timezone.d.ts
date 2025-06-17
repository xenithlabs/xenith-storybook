import { TimezoneOptionType } from '@/main';

export declare const useFetchTimezoneOptions: () => {
    basicOptions: TimezoneOptionType[];
    fetchTimezoneOptions: () => Promise<any[]>;
};
export declare const getTimezoneOptionValue: (option: unknown | TimezoneOptionType) => string;
//# sourceMappingURL=timezone.d.ts.map