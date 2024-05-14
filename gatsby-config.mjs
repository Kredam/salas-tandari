import utils from './src/utils/index.mjs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

export const __dirname = dirname(fileURLToPath(import.meta.url))

const require = createRequire(import.meta.url)

const { locales, defaultLocale } = utils

const languages = Object.keys(locales)
const defaultLanguage = Object.keys(defaultLocale)[0]

const gatsbyRequiredRules = join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
)

const config = {
  siteMetadata: {
    title: `Tandari Szállás`,
    siteUrl: `https://www.salas-tandari.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/layout/index.js'),
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', '.cache', '.github', 'public'],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        languages,
        defaultLanguage,
        siteUrl: `https://www.salas-tandari.com`,
        i18nextOptions: {
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNs: 'index',
          keySeparator: '.',
          interpolation: {
            escapeValue: false,
          },
        },
      },
    },
  ],
}

export default config
