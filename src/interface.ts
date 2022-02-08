/**
 * Orientation type for 'Stepped' lines
 */
export type Orientation = 'h' | 'v';

/**
 * Delay
 */
export type Delay = number | boolean;

/**
 * Anchor type
 */
export type Anchor = string;

export interface BaseProps {
  /**
   * Border color, Example: #f00, red, etc.
   */
  borderColor?: string;
  /**
   * Border style, Example: solid, dashed, etc.
   */
  borderStyle?: string;
  /**
   * Border width (px)
   */
  borderWidth?: number;
  /**
   * Desired CSS className for the rendered element
   */
  className?: string;
  /**
   * Z-index offset
   */
  zIndex?: number;
  /**
   * CSS class name of the desired container
   */
  within?: string;
}

export interface LineCoordinates {
  /**
   * First X coordinate
   */
  x0: number;
  /**
   * Second X coordinate
   */
  x1: number;
  /**
   * First Y coordinate
   */
  y0: number;
  /**
   * Second Y coordinate
   */
  y1: number;
}

/**
 * Props for 'Stepped' components
 */
export interface SteppedProps {
  /**
   * "h" for horizontal, "v" for vertical
   */
  orientation?: Orientation;
}

/**
 * Props of 'Line' component
 */
export interface LineProps extends BaseProps, LineCoordinates {}

/**
 * Props of 'LineTo' component
 */
export interface LineToProps extends BaseProps {
  /**
   * Force render after delay (ms)
   */
  delay?: Delay;
  /**
   * Anchor for starting point (Format: "x y")
   */
  fromAnchor?: Anchor;
  /**
   * CSS class name of the first element
   */
  from: string;
  /**
   * Anchor for ending point (Format: 'x y")
   */
  toAnchor?: Anchor;
  /**
   * CSS class name of the second element
   */
  to: string;
}

/**
 * Props of 'SteppedLine' component
 */
export interface SteppedLineProps extends LineProps, SteppedProps {}
/**
 * Props of 'SteppedLineTo' component
 */
export interface SteppedLineToProps extends LineToProps, SteppedProps {}
