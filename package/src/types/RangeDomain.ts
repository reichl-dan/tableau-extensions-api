import type * as Enums from '../enums/_enums'
import type { DataValue } from './_types'

/**
 * The domain of range filter
 */
export interface RangeDomain {
  /**
   * Maximum value as specified in the domain
   */
  max: DataValue

  /**
   * Minimum value as specified in the domain
   */
  min: DataValue

  /**
   * The domain type (relevant, all)
   */
  type: Enums.FilterDomainType
}
