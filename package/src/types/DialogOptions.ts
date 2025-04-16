import type * as Enums from '../enums/_enums'

/**
 * Options for configuring dialog display
 */
export interface DialogOptions {
  /**
   * Specifies the style for the popup dialog.
   * @since 1.10.0 and Tableau 2022.4
   */
  dialogStyle?: Enums.DialogStyle

  /**
   * Specifies the suggested height (in pixels) of the popup dialog. Not guaranteed to be exactly that height.
   */
  height?: number

  /**
   * Specifies the suggested width (in pixels) of dialog to display. Not guaranteed to be exactly that width.
   */
  width?: number
}
