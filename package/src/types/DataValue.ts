/**
 * Represents a data value in Tableau
 */
export interface DataValue {
  /**
   * The value formatted according to the locale and the formatting applied to the field or parameter.
   * @since 1.4.0
   */
  formattedValue?: string

  /**
   * The raw native value as a JavaScript type, which is one of string, number, boolean, or Date object.
   * Please note that special values are returned as null. The actual special value can be found in formattedValue,
   * which would be something like 'Null', or 'No-Access'.
   * @since 1.2.0 Fixes the type to be the raw native value rather than a string.
   */
  nativeValue: unknown

  /**
   * Contains the raw native value as a JavaScript type, which is one of string, number, boolean, or Date (as a string).
   * Please note that special values, regardless of type, are always returned as a String surrounded by percent signs,
   * such as '%null%', or '%no-access%'.
   */
  value: unknown
}
