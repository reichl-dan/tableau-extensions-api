import type * as Enums from '../enums/_enums'
import type { EventListenerManager, Parameter, Size } from './_types'

/**
 * Represents a sheet (worksheet or dashboard) in a Tableau workbook.
 */
export interface Sheet extends EventListenerManager {
  /**
   * @returns The name of the sheet.
   */
  name: string

  /**
   * @returns The type of the sheet.
   */
  sheetType: Enums.SheetType

  /**
   * @returns Size of the sheet.
   */
  size: Size

  /**
   * @param parameterName The name of the parameter to find.
   * @returns The parameter with the given name, or undefined if it does not exist.
   */
  findParameterAsync(parameterName: string): Promise<Parameter | undefined>

  /**
   * @returns A collection of all the Tableau parameters that are used in this workbook.
   */
  getParametersAsync(): Promise<Parameter[]>
}
