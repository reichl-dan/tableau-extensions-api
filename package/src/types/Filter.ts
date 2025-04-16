import type * as Enums from '../enums/_enums'
import type { Field } from './_types'

/**
 * Represents a filter in Tableau.
 */
export interface Filter {
  /**
   * The id of the field being filtered.
   */
  fieldId: string

  /**
   * The name of the field being filtered. Note that this is the caption as shown in the UI, and not the actual database field name.
   */
  fieldName: string

  /**
   * The type of the filter.
   */
  filterType: Enums.FilterType

  /**
   * The parent worksheet.
   */
  worksheetName: string

  /**
   * Gets the list of worksheets where this filter is applied.
   * @returns A promise containing the list of worksheet names that have the filter applied.
   */
  getAppliedWorksheetsAsync(): Promise<string[]>

  /**
   * Gets the field for this filter.
   * @returns A promise containing the field for the filter.
   * @since 1.5.0 Fixed to properly return the field. Also requires Tableau 2019.2+.
   */
  getFieldAsync(): Promise<Field>

  /**
   * Applies the filter to the specified list of worksheets. If the worksheet(s) do not exist or do not contain the field in their data sources, an exception is thrown.
   * @param applyToWorksheets List of worksheets to apply the filter on
   * @returns A promise containing the list of worksheet names that have the filter applied
   */
  setAppliedWorksheetsAsync(applyToWorksheets: string[]): Promise<string[]>
}
