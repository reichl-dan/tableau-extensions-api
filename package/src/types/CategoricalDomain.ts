import type * as Enums from '../enums/_enums'
import type { DataValue } from './_types'

/**
 * The domain of a categorical filter
 */
export interface CategoricalDomain {
  /**
   * The domain type (relevant, all)
   */
  type: Enums.FilterDomainType

  /**
   * The list of values in the domain of the filter
   */
  values: DataValue[]
}
