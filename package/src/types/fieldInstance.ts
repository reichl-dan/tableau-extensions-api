import type * as Enums from '../enums/_enums'
import type { Field } from './field'
import type { DataSource } from './dataSource'

/**
 * Represents a field and its properties
 * @since 1.11.0
 */
export interface FieldInstance extends Field {
  /** The unique representation of the field across all data sources in the workbook. In summary data, this includes aggregation. */
  fieldId: string
}
