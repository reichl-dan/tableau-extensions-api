import type * as Enums from '../enums/_enums'

/**
 * Represents an annotation in a worksheet.
 */
export interface Annotation {
  /**
   * The formatted annotation as a HTML string. HTML is currently not accepted when adding an annotation.
   */
  annotationHTML: string

  /**
   * Unique id representing the annotation.
   */
  annotationId: number

  /**
   * The plain text of the annotation.
   */
  annotationText: string

  /**
   * The annotation type.
   */
  annotationType: Enums.AnnotationType

  /**
   * Unique tuple representing the mark that is being annotated. The tupleId will be 0 for Area or Point annotations.
   */
  tupleId: number
}
