import type * as Enums from '../enums/_enums'
import type { CategoricalDomain, DataValue, Filter } from './_types'

/**
 * A Categorical Filter
 */
export interface CategoricalFilter extends Filter {
  /**
   * A list of values applied to this categorical filter. Notice that if this is a dependent filter, the current relevant values can be fetched by calling getDomainAsync(tableau.FilterDomainType.Relevant).
   */
  appliedValues: DataValue[]

  /**
   * True if all the values are selected for this filter. When 'All' is selected, appliedValues returns an empty list.
   * @since 1.9.0 and Tableau 2022.2
   */
  isAllSelected?: boolean

  /**
   * True if this filter is an exclude filter, false if an include filter.
   */
  isExcludeMode: boolean

  /**
   * Gets the domain of values in this categorical filter.
   * @param domainType Optional parameter for the domain type
   * @returns A promise containing the categorical domain for the filter. Note if a filter contains multiple fields (such as a filter action with multiple fields), the values array in the returned CategoricalDomain (CategoricalDomain.values) will be empty. If there are multiple fields in the filter, the results need to be represented by a table, which is not currently supported.
   */
  getDomainAsync(domainType?: Enums.FilterDomainType): Promise<CategoricalDomain>
}
