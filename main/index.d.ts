// filepath: /workspaces/tableau-extensions-api/main/index.d.ts
// Re-export all types from the type definition files
export * from '../types/index';
export * from '../types/globals';
export * from '../types/extensions';
export * from '../types/enums';

// Declare the value exports that match the JS file
export const extension: import('../types/index').Tableau['extensions'];
export const settings: import('../types/index').Tableau['extensions']['settings'];
export const ui: import('../types/index').Tableau['extensions']['ui'];
export const environment: import('../types/index').Tableau['extensions']['environment'];
export const worksheet: import('../types/index').Tableau['extensions']['worksheetContent']['worksheet'];
export const dashboard: import('../types/index').Tableau['extensions']['dashboardContent']['dashboard'];
export const Tableau: Omit<import('../types/index').Tableau, 'extensions'>;

// Declare the default export
declare const _default: import('../types/index').Tableau;
export default _default;