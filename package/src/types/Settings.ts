import type { EventListenerManager } from './_types'

/**
 * The settings namespace is used to get and set settings values. You can use the settings to configure your extension. The setting values are be persisted in a workbook.
 */
export interface Settings extends EventListenerManager {
  /**
   * Indicates whether or not the settings have been modified since the last call to saveAsync.
   * @returns True if settings have been modified, false otherwise.
   */
  isModified: boolean

  /**
   * Erases a settings key / value pair. If key isn't found, nothing happens.
   * @param key The key of the pair to erase.
   */
  erase(key: string): void

  /**
   * Gets a settings value or undefined if the value does not exist.
   * @param key The key to retrieve.
   * @returns The value or undefined if it does not exist.
   */
  get(key: string): string | undefined

  /**
   * Returns a copy of all the saved settings keys and values. Modifying this value will have no effect on the class.
   * @returns All the saved settings keys and values in a dictionary.
   */
  getAll(): { [key: string]: string }

  /**
   * Attempts to persist any currently modified settings key-value pairs. The saveAsync() method should only be called in authoring mode.
   * @returns Promise containing the newly saved settings values.
   */
  saveAsync(): Promise<Record<string, never>>

  /**
   * Adds or updates a settings key / value pair.
   * @param key The key to save.
   * @param value The value to save.
   */
  set(key: string, value: string): void
}
