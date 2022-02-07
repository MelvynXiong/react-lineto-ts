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
