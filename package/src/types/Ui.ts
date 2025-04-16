import type { DialogOptions } from './_types'

/**
 * The UI namespace contains methods that allow an extension to display a popup dialog window.
 * A modal dialog can be useful in authentication or configuration scenarios, or when extra
 * situational UI space is needed. Only one dialog can be displayed at a time per extension.
 */
export interface UI {
  /**
   * The closeDialog method must be called from extension running in the popup dialog window.
   * @param payload Optional payload to be returned to the parent extension
   */
  closeDialog(payload?: string): void

  /**
   * Displays a popup dialog window.
   * @param url The url of the 'dialog extension' to navigate to in the dialog. The url must belong to the same domain as the parent extension.
   * @param payload Optional payload to provide data to the popup dialog window at startup
   * @param dialogOptions Optional specifications for the popup dialog window dimensions and style
   * @returns A promise that resolves when the dialog has been closed with the payload from the dialog
   */
  displayDialogAsync(
    url: string,
    payload?: string,
    dialogOptions?: DialogOptions,
  ): Promise<string>
}
