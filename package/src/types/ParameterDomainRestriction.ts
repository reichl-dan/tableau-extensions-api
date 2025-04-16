import type * as Enums from '../enums/_enums'
import type { DataValue } from './_types'

/**
 * Represents the allowable set of values which a parameter can be set to.
 */
export interface ParameterDomainRestriction {
  /**
   * If ParameterValueType.List, the array will be the list of values which the parameter is allowed to take.
   */
  allowableValues?: DataValue[]

  /**
   * If ParameterValueType.Range, this defines the step date period used in the Parameter UI control slider.
   * Note that if you specify a new value for the parameter, using the changeValueAsync() method,
   * that does not align on the dateStepPeriod interval, the value will be set to the closest, earlier date.
   */
  dateStepPeriod?: Enums.PeriodType

  /**
   * If ParameterValueType.Range, the value will be the upper bound of allowable values for the parameter.
   */
  maxValue?: DataValue

  /**
   * If ParameterValueType.Range, the value will be the lower bound of allowable values for the parameter.
   */
  minValue?: DataValue

  /**
   * If ParameterValueType.Range, the value will define the step size used in the parameter UI control slider.
   * Note that if you specify a new value for the parameter, using the changeValueAsync() method,
   * that does not align on the stepSize interval, the value will be set to the closest, lower interval.
   */
  stepSize?: number

  /**
   * The type of restriction we have on the parameter's domain. This value will effect what other
   * properties are configured on this object.
   */
  type: Enums.ParameterValueType
}
