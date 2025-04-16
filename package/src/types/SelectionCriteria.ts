import type { CategoricalValue, RangeValue } from './_types'

/**
 * SelectionCriteria interface is used to specify to the fieldName to values for Hierarchical, Categorical and Range based selections.
 */
export interface SelectionCriteria {
  /**
   * Fieldname of the mark that is intended to be selected. Hierarchical fields follow the convention of "[{parentField}].[{selectingField}]"
   */
  fieldName: string

  /**
   * Value that is intended to be selected. This can be specified as the list of values or a single value.
   * Range-based selections need to provide the value in the format of RangeValue interface.
   */
  value: CategoricalValue | RangeValue
}
