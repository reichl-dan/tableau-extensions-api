import type * as Enums from '../enums/_enums'

/**
 * RangeValue interface to provide selection value for range based selections. The associated field should be a quantitative field.
 * For Date Values, UTC Date objects are expected. (i.e., var min = new Date(Date.UTC(1999, 0, 1))).
 * While date string inputs work, UTC date inputs are officially supported going forward for RangeValue.
 */
export interface RangeValue {
  /**
   * min range value for the range based selection
   */
  min: number | Date

  /**
   * max range value for the range based selection
   */
  max: number | Date

  /**
   * Including nulloptions parameter.
   */
  nullOption?: Enums.FilterNullOption
}
