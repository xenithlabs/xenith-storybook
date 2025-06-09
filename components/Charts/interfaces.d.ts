import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

export type StatusType = "success" | "pending" | "failed" | "expired";
export interface IChartBarData {
    status: string;
    percentage: number;
    value: number;
}
export interface IStatusBarProps {
    data: IChartBarData[];
    label: string;
    hasAccess: boolean;
    isLoading: boolean;
    tooltipText: string;
    tooltipContentClassName?: string;
}
export interface ICustomTickProps {
    x: number;
    y: number;
    payload: {
        value: number;
        index?: number;
    };
}
export interface ICustomPayload {
    value: ValueType;
    name: NameType;
}
export type IChartDataItem = {
    name: string;
    uv: number | string;
};
export type ChartsType = "volume" | "time";
export interface IChartsProps {
    label: string;
    tooltipText: string;
    hasAccess: boolean;
    isLoading: boolean;
    data: IChartDataItem[];
    type: ChartsType;
    currency?: string;
    dataKeyX?: keyof IChartDataItem;
    dataKeysY?: (keyof IChartDataItem)[];
    className?: string;
    formatYText?: (value: number) => string;
    tooltipContentClassName?: string;
    yAxisConfig?: {
        label?: string;
        dataKey?: string;
        unit?: string;
        format?: "millions" | "thousands" | "minutes" | "default";
        range?: [string, string];
    };
}
export interface ICustomChartTooltip extends TooltipProps<ValueType, NameType> {
    type: ChartsType;
    currency?: string;
}
//# sourceMappingURL=interfaces.d.ts.map