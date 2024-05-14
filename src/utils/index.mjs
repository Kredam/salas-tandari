import { join, dirname } from 'path'
import { lstatSync, readdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const defaultLocale = { hu: 'HU' }

const __dirname = dirname(fileURLToPath(import.meta.url))
const parentDir = __dirname.substring(0, __dirname.lastIndexOf('/'))

const require = createRequire(import.meta.url)

const locales = readdirSync(join(parentDir, 'locales'))
  .filter((folderName) => {
    const joinedPath = join(join(parentDir, 'locales'), folderName)
    const isDir = lstatSync(joinedPath).isDirectory()
    return isDir
  })
  .map((folderName) => {
    const filePath = join(
      join(join(parentDir, 'locales'), folderName),
      'index.json'
    )
    const file = require(filePath)
    const locale = file.locales.locale.split('_')
    return { [locale[0]]: locale[1] }
  })

locales.splice(locales.indexOf(defaultLocale), 1)
locales.unshift(defaultLocale)

export default {
  locales,
  defaultLocale,
}
