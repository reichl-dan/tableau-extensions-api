import type * as Enums from '../enums/_enums'
import type { WorkbookFormatting } from './_types'

/**
 * The environment namespace provides a way to programmatically gather information about
 * the environment in which the Extensions is running.
 */
export interface Environment {
  /**
   * The version of the API being used by the Extensions.
   */
  apiVersion: string

  /**
   * Current context in which the Extensions is running (i.e. Desktop or Server).
   */
  context: Enums.ExtensionContext

  /**
   * The country of the Tableau instance that is running the Extension.
   * The country is the ISO 3166 country string represented by the user specified language.
   * If the user specified language is Français (Canada), country is CA.
   * @since 1.9.0 and Tableau 2022.2
   */
  country?: string

  /**
   * The language of the Tableau instance that is running the Extension.
   * The language is the ISO 639 language string of the user specified language.
   * If the user specified language is Français (Canada), language is fr.
   */
  language: string

  /**
   * The OS locale of the environment in which the Extension is running.
   * Tableau Server supports both a language and a locale.
   * This is the locale as defined in RFC 5646 in lowercase.
   * If the user specified locale is English (United States), the locale is en-us.
   */
  locale: string

  /**
   * Current mode of the Extensions (i.e. authoring or viewing).
   */
  mode: Enums.ExtensionMode

  /**
   * The OS in which Tableau is running.
   */
  operatingSystem: string

  /**
   * The version of Tableau that is running the Extensions.
   */
  tableauVersion: string

  /**
   * A unique id representing the current user. The id is unique across a Tableau deployment
   * or across a Tableau Cloud Site. When the extension is running in desktop, the uniqueUserId
   * is derived from machine-name/user-name. When the extension is running in server, the
   * uniqueUserId is derived from the user's login name. There is no mechanism to obtain
   * the actual user name or any additional user information.
   */
  uniqueUserId?: string

  /**
   * WorkbookFormatting contains an array of FormattingSheets that will get your formatting
   * information from the workbook. The types of sheet formatting by Class Name Key:
   * WorksheetTitle, Worksheet (body text), Tooltip, StoryTitle, and DashboardTitle
   * These formatting sheets include the following CSS properties: fontName, fontSize,
   * isFontBold, isFontItalic, isFontUnderlined, and color.
   * @since 1.7.0 and Tableau 2021.4
   */
  workbookFormatting?: WorkbookFormatting
}
