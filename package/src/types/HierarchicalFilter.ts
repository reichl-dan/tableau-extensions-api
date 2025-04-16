import type {
  Filter,
  HierarchicalFilterDataValue,
  HierarchicalLevelDetail,
} from './_types'

/**
 * Hierarchical Filters are used when a hierarchical field is used as a filter on a cube database.
 * As an example, assume a hierarchical field in Product, named ByCategory. ByCategory has the following
 * five levels: Family, Category, Subcategory, Brand, Sku.
 * @since Extensions 1.10.0 and Tableau version 2022.3
 */
export interface HierarchicalFilter extends Filter {
  /**
   * A list of values applied to this hierarchical filter.
   */
  appliedValues: HierarchicalFilterDataValue[]

  /**
   * The dimension name associated with the filter. In the ByCategory filter example, this would be 'Product'
   */
  dimensionName: string

  /**
   * The hierarchy caption associated with the filter. In the ByCategory filter example, this would be '[Product].[ByCategory]'
   */
  hierarchyCaption: string

  /**
   * True if all the values are selected for this filter. When 'All' is selected, appliedValues returns an empty list.
   * @since 1.9.0 and Tableau 2022.2
   */
  isAllSelected: boolean

  /**
   * Details about each level in the hierarchical filter.
   */
  levelDetails: HierarchicalLevelDetail[]

  /**
   * The number of levels in the hierarchical filter. In the ByCategory filter example, this would be 5
   */
  numberOfLevels: number
}
