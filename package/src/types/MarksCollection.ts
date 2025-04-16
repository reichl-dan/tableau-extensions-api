import type { DataTable } from './_types'

/**
 * Represents a collection of marks on a viz. This collection could be marks that are either selected or highlighted.
 */
export interface MarksCollection {
  /**
   * A collection of data tables. Each row in each data table represents a single mark on the viz.
   * Since marks can contain columns different than the columns of another mark, for example,
   * a dual axis chart, each table represents one specific schema of a mark.
   */
  data: DataTable[]
}
