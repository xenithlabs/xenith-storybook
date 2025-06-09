import { IChartBarData } from '@/components/Charts/interfaces';

export declare const formatValue: (value: number) => string;
export declare const formatTime: (value: number) => string;
export declare const formatTimeLong: (value: number) => string;
/**
 * Normalize the percentages so they add up to exactly 100%.
 * Keeps the same value fields; adjusts only the percentage field.
 */
export declare const normalizePercentages: (data: IChartBarData[]) => IChartBarData[];
//# sourceMappingURL=charts.d.ts.map