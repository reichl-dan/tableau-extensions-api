/**
 * A selected value in a hierarchical filter
 */
export interface HierarchicalFilterDataValue {
  /**
   * The path to this selected item. In the ByCategory example, the hierarchicalPath for a level 2 item could be '[Outdoor & Sporting].[Bikes].[Kids' Bikes]'.
   */
  hierarchicalPath: string

  /**
   * The level of this selected item. In the ByCategory example, the level could be 0-4. For '[Outdoor & Sporting].[Bikes].[Kids' Bikes]', the level is 2.
   */
  level: number

  /**
   * The DataValue of the seleted item
   */
  value: unknown
}
