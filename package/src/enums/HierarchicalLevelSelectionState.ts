/**
 * Represents the selection state of a level in a hierarchical structure.
 */
export enum HierarchicalLevelSelectionState {
  /**
   * All members are selected
   */
  AllSelected = 'all-selected',
  /**
   * Some members are selected
   */
  SomeSelected = 'some-selected',
  /**
   * No members are selected
   */
  NoneSelected = 'none-selected',
}
