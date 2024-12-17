import { HTMLAttributes } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { textStyles } from './styles';

interface TextProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof textStyles> {
    asChild?: boolean;
}
declare const Text: import('../../../node_modules/react').ForwardRefExoticComponent<TextProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export { Text };
//# sourceMappingURL=Text.d.ts.map