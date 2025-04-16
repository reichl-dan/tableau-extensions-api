import type { Point } from './_types'

/**
 * Provides the necessary information for how to display a Tableau tooltip.
 * @since 1.12.0 and Tableau 2024.2
 */
export interface TooltipContext {
  /**
   * Indicates where the tooltip should be displayed relative to the top left of the visualization.
   */
  tooltipAnchorPoint: Point
}
