import type * as Enums from '../enums/_enums'
import type { Encoding } from './_types'

/**
 * @since 1.11.0 Represents a collection of fields on various encodings for a single marks card
 */
export interface MarksSpecification {
  /**
   * Array of encodings for the marks
   */
  encodings: Encoding[]

  /**
   * The primitive mark type
   */
  primitiveType: Enums.MarkType
}
