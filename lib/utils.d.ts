import { Anchor } from './interface';
export declare function parseAnchorPercent(value: string): number;
export declare function parseAnchorText(value: string): {
    y: number;
    x?: undefined;
} | {
    x: number;
    y?: undefined;
} | null;
export declare function parseAnchor(value: Anchor): {
    x: number;
    y: number;
};
export declare function findElement(className: string): Element | null;
