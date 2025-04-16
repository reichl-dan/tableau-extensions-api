import type * as Enums from '../enums/_enums'
import type { FieldInstance } from './_types'

/**
 * Represents a single field and its associated encoding on a marks card
 * @since 1.11.0
 */
export interface Encoding {
  /**
   * Field and its properties
   */
  field: FieldInstance

  /**
   * The unique representation of the encodings. This allows to identify the duplicate fields that are added to encodings.
   */
  fieldEncodingId: string

  /**
   * inbuilt encoding type or the custom encoding
   */
  id: string

  /**
   * type of the encoding
   */
  type: Enums.EncodingType
}
