// src/types/react-pageflip.d.ts

declare module 'react-pageflip' {
    import * as React from 'react';
    import { PageFlip } from 'page-flip';

    export interface IProps {
        width?: number;
        height?: number;
        size?: 'fixed' | 'stretch' | 'auto';
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        maxShadowOpacity?: number;
        showCover?: boolean;
        mobileScrollSupport?: boolean;
        className?: string;
        style?: React.CSSProperties;
        startPage?: number;
        usePortrait?: boolean;
        startZIndex?: number;
        autoSize?: boolean;
        clickEventForward?: boolean;
        useMouseEvents?: boolean;
        swipeDistance?: number;
        showPageCorners?: boolean;
        flippingTime?: number;
        disableFlipByClick?: boolean;
        children?: React.ReactNode;
        onFlip?: (e: any) => void;
        onChangeOrientation?: (e: any) => void;
        onChangeState?: (e: any) => void;
    }

    export interface HTMLFlipBookElement {
        pageFlip(): PageFlip;
    }

    const HTMLFlipBook: React.ForwardRefExoticComponent<
        IProps & React.RefAttributes<HTMLFlipBookElement>
    >;

    export default HTMLFlipBook;
}
