import type { TableauWorksheetEvent } from './_types'

/**
 * An event which is raised when summary data is changed for a worksheet or when a worksheet's data source is refreshed
 * @since 1.11.0 and Tableau 2024.1
 */
export interface SummaryDataChangedEvent extends TableauWorksheetEvent {}
