import { PropsWithChildren } from '../../../node_modules/react';
import { default as L } from 'leaflet';
import { MapContainerProps } from 'react-leaflet';

export declare const Map: ({ children, ...props }: PropsWithChildren<MapContainerProps>) => import("react/jsx-runtime").JSX.Element;
export declare const MapMarker: import('../../../node_modules/react').ForwardRefExoticComponent<import('react-leaflet').MarkerProps & import('../../../node_modules/react').RefAttributes<L.Marker<any>>>;
export declare const MapMarkerPopup: import('../../../node_modules/react').ForwardRefExoticComponent<import('react-leaflet').PopupProps & import('../../../node_modules/react').RefAttributes<L.Popup>>;
export declare const MapIcon: typeof L.Icon;
//# sourceMappingURL=Map.d.ts.map