import { default as React } from '../../../node_modules/react';
import { ButtonProps } from './interfaces';

declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const ExpandableButton: React.ForwardRefExoticComponent<Omit<ButtonProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { Button, ExpandableButton };
//# sourceMappingURL=Button.d.ts.map