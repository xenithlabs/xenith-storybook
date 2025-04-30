import { DateRange } from 'react-day-picker';

declare const RANGE_TEMPLATE_NAMES: readonly ["Today", "This week", "This month", "This quarter", "This year", "Last week", "Last month", "Last quarter", "Last year"];
type RangeTemplate = (typeof RANGE_TEMPLATE_NAMES)[number];
export declare const RANGE_TEMPLATES: Record<RangeTemplate, () => DateRange>;
export {};
//# sourceMappingURL=templates.d.ts.map