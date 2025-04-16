import type * as Enums from '../enums/_enums'

/**
 * Details about each level in a hierarchical filter
 */
export interface HierarchicalLevelDetail {
  /**
   * The level name. In the ByCategory example, the name could be 'Family', 'Category', 'Subcategory', 'Brand', or 'Sku'.
   */
  name: string

  /**
   * The level selection state
   */
  levelSelectionState: Enums.HierarchicalLevelSelectionState
}
