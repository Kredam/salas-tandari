const { join } = require('path')
const { readdirSync, lstatSync } = require('fs')

const defaultLocale = { hu: 'HU' }

const getLocales = () => {
  const localesFolder = join(__dirname, '..', 'locales')
  const locales = readdirSync(localesFolder)
    .filter((folderName) => {
      const joinedPath = join(localesFolder, folderName)
      const isDir = lstatSync(joinedPath).isDirectory()
      return isDir
    })
    .map((folderName) => {
      const filePath = join(join(localesFolder, folderName), 'index.json')
      const file = require(filePath)
      const locale = file.locales.locale.split('_')
      return { [locale[0]]: locale[1] }
    })

  locales.splice(locales.indexOf(defaultLocale), 1)
  locales.unshift(defaultLocale)
  return { locales, defaultLocale }
}

module.exports = {
  getLocales,
}
