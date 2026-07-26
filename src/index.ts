export interface Point {
  /**
   * Latitude of the Point
   * Value must be between -90 and 90
   */
  latitude: number;
  /**
   * Longitude of the Point
   * Value must be between -180 and 180
   */
  longitude: number;
  /**
   * Relative pull of a Point
   * @default 1
   * must be finite and not negative
   */
  weight?: number;
}

export interface Midpoint {
  /**
   * Latitude of the Point
   * Value must be between -90 and 90
   */
  latitude: number;
  /**
   * Longitude of the Point
   * Value must be between -180 and 180
   */
  longitude: number;
}

/**
 * Weighted midpoint of a set of geographic coordinates.
 */
const middlePoint = (points: readonly Point[]): Point[] => {
  // Validate points

  // Set accumulators

  // For Each point
  //    validate lat
  //    validate long
  //    validate weight

  //    convert

  return points;
};

export default middlePoint;
