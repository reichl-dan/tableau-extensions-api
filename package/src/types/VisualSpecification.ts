import type { FieldInstance, MarksSpecification } from './_types'

/**
 * Represents a collection of fields on various encodings as well as other viz specific information for a worksheet
 * @since 1.11.0
 */
export interface VisualSpecification {
  /**
   * Array of fields on columns
   */
  columnFields: FieldInstance[]

  /**
   * Array of fields on rows
   */
  rowFields: FieldInstance[]

  /**
   * The index of the active marks specification
   */
  activeMarksSpecificationIndex: number

  /**
   * Array of marks specifications
   */
  marksSpecifications: MarksSpecification[]
}
