import {
  getDashboardExtension,
  getExtensionConfig,
  getWorksheetExtension,
} from 'tableau-extensions-api'

async function testTypes() {
  const config = await getExtensionConfig()
  const dashboard = await getDashboardExtension()
  const worksheet = await getWorksheetExtension()
  return { config, dashboard, worksheet }
}
