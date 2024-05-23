const { join } = require('path')
const { readdirSync, lstatSync } = require('fs')

const defaultLocale = 'hu'

const getLocales = () => {
  const localesFolder = join(__dirname, '..', 'locales')
  const locales = readdirSync(localesFolder).filter((folderName) => {
    const joinedPath = join(localesFolder, folderName)
    const isDir = lstatSync(joinedPath).isDirectory()
    return isDir
  })

  locales.splice(locales.indexOf(defaultLocale), 1)
  locales.unshift(defaultLocale)
  return locales
}

const locales = getLocales()

module.exports = {
  locales,
  defaultLocale,
}
