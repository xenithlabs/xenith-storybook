import { ReactNode } from '../../../node_modules/react';
import { Transition } from 'motion/react';

export type CarouselContextType = {
    index: number;
    setIndex: (newIndex: number) => void;
    itemsCount: number;
    setItemsCount: (newItemsCount: number) => void;
    disableDrag: boolean;
};
declare function useCarousel(): CarouselContextType;
export type CarouselProviderProps = {
    children: ReactNode;
    initialIndex?: number;
    onIndexChange?: (newIndex: number) => void;
    disableDrag?: boolean;
};
export type CarouselProps = {
    children: ReactNode;
    className?: string;
    initialIndex?: number;
    index?: number;
    onIndexChange?: (newIndex: number) => void;
    disableDrag?: boolean;
};
declare function Carousel({ children, className, initialIndex, index: externalIndex, onIndexChange, disableDrag, }: CarouselProps): import("react/jsx-runtime").JSX.Element;
export type CarouselNavigationProps = {
    className?: string;
    classNameButton?: string;
    alwaysShow?: boolean;
};
declare function CarouselNavigation({ className, classNameButton, alwaysShow, }: CarouselNavigationProps): import("react/jsx-runtime").JSX.Element;
export type CarouselIndicatorProps = {
    className?: string;
    classNameButton?: string;
};
declare function CarouselIndicator({ className, classNameButton, }: CarouselIndicatorProps): import("react/jsx-runtime").JSX.Element;
export type CarouselContentProps = {
    children: ReactNode;
    className?: string;
    transition?: Transition;
};
declare function CarouselContent({ children, className, transition, }: CarouselContentProps): import("react/jsx-runtime").JSX.Element;
export type CarouselItemProps = {
    children: ReactNode;
    className?: string;
};
declare function CarouselItem({ children, className }: CarouselItemProps): import("react/jsx-runtime").JSX.Element;
export { Carousel, CarouselContent, CarouselNavigation, CarouselIndicator, CarouselItem, useCarousel, };
//# sourceMappingURL=Carousel.d.ts.map