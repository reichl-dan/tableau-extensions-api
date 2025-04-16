import type * as Enums from '../enums/_enums'
import type {
  DataValue,
  EventListenerManager,
  ParameterDomainRestriction,
} from './_types'

/**
 * Represents a parameter in Tableau and provides ways to introspect the parameter and change its values.
 */
export interface Parameter extends EventListenerManager {
  /**
   * The allowable set of values this parameter can take.
   */
  allowableValues: ParameterDomainRestriction

  /**
   * DataValue representing the current value of the parameter.
   */
  currentValue: DataValue

  /**
   * The type of data this parameter holds.
   */
  dataType: Enums.DataType

  /**
   * A unique identifier for this Parameter.
   */
  id: string

  /**
   * The display name of this parameter.
   */
  name: string

  /**
   * Modifies this parameter and assigns it a new value. The new value must fall within the domain restrictions defined by
   * allowableValues. If the domain restriction is ParameterValueType.Range, be sure to check the allowableValues before
   * assigning a new value. If the new value is out of range, the updated value will be set to either the minValue or
   * maxValue of the range (whichever is closer). If the range has a stepSize or dateStepPeriod, the parameter gets set
   * to the closest, lower step, or the closest, earlier date.
   * @param newValue The new value to assign to this parameter. For changing Date parameters, UTC Date objects are expected.
   * @returns The updated DataValue. The promise is rejected if newValue is invalid.
   */
  changeValueAsync(newValue: string | number | boolean | Date): Promise<DataValue>
}
