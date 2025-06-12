import { SVGProps } from '../../../node_modules/react';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

export type StatusType = "success" | "pending" | "failed" | "expired" | "cancelled" | "pending approval";
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
    containerClassName?: string;
}
export interface ICustomTickProps extends SVGProps<SVGTextElement> {
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
export type IYAxisConfig = {
    label?: string;
    dataKey?: string;
    unit?: string;
    format?: string;
    range?: [string, string];
    multiplier?: number | string;
};
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
    containerClassName?: string;
    yAxisConfig?: IYAxisConfig;
}
export interface ICustomChartTooltip extends TooltipProps<ValueType, NameType> {
    type: ChartsType;
    currency?: string;
}
//# sourceMappingURL=interfaces.d.ts.map