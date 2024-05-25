const { join } = require('path')
const { locales, defaultLocale } = require('./src/utils/index')

const languages = locales
const defaultLanguage = defaultLocale

const gatsbyRequiredRules = join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
)

module.exports = {
  siteMetadata: {
    title: `Tandari Szállás`,
    description: 'Tandari Szállás Rendezvényház',
    defaultLang: defaultLanguage,
    siteUrl: `https://www.new.salas-tandari.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-root-import',
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/layout.js'),
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
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
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
