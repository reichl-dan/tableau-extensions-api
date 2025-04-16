/**
 * Represents a table of data in a data source.
 */
export interface TableSummary {
  /**
   * The name of the table (i.e. the caption).
   */
  name: string

  /**
   * Unique string representing this table.
   */
  id: string

  /**
   * The ID of the connection that this table belongs to.
   */
  connectionId: string

  /**
   * The custom SQL used to create this table if it was created with Custom SQL, undefined otherwise.
   */
  customSQL?: string
}
