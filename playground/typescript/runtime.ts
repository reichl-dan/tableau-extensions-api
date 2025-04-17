import {
  dashboard,
  environment,
  extensions,
  settings,
  ui,
  worksheet,
} from 'tableau-extensions-api'

console.log(extensions)
console.log(dashboard)
console.log(worksheet)
console.log(settings)
console.log(environment)
console.log(ui)
console.log(dashboard)

function testTypes() {
  return {
    dashboardName: dashboard.name,
    worksheetName: worksheet.name,
    settings: settings.isModified,
    environment: environment.apiVersion,
    ui: ui.displayDialogAsync,
  }
}
