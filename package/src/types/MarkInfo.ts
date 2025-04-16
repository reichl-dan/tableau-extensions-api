import type * as Enums from '../enums/_enums'

/**
 * Represents a mark in a worksheet.
 */
export interface MarkInfo {
  /**
   * The RGBA value of this mark.
   */
  color: string

  /**
   * Unique tuple representing this mark in a drawn visualization.
   */
  tupleId?: number

  /**
   * The type of this mark.
   */
  type: Enums.MarkType
}
