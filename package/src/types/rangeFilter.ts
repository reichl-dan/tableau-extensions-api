import type * as Enums from '../enums/_enums'
import type { DataValue } from './dataValue'
import type { Filter } from './filter'
import type { RangeDomain } from './rangeDomain'

/**
 * A Range Filter
 */
export interface RangeFilter extends Filter {
  /**
   * True if null values are included in the filter, false otherwise.
   */
  includeNullValues: boolean

  /**
   * Maximum value, inclusive, applied to the filter.
   */
  maxValue: DataValue

  /**
   * Minimum value, inclusive, applied to the filter.
   */
  minValue: DataValue

  /**
   * Gets the domain of values in this range filter.
   * @param domainType Optional parameter for the domain type
   * @returns A promise containing the domain for the range filter
   */
  getDomainAsync(domainType?: Enums.FilterDomainType): Promise<RangeDomain>
}
