require('dotenv').config({
  path: `../.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ stage: 0 }),
          require('stylelint')()
          // require('cssnano')() // Do I need to include cssnano or does it ship by default?
        ]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Merriweather`,
            variants: [`900`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layouts/RegularPage.tsx')
        }
      }
    },
    {
      resolve: '@dschau/gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GH_ACCESS_TOKEN}` // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
        queries: [
          `{
            repository(name: "kommunity-content", owner: "kommunity-dev") {
              name
              files: object(expression: "master:content") {
                ... on Tree {
                  entries {
                    name
                    object {
                      ... on Blob {
                        text
                      }
                    }
                  }
                }
              }
            }
          }`
        ]
      }
    },
    // `gatsby-plugin-preact`,
    // IF DEVELOPING WITH LOCAL COPY OF KOMMUNITY-CONTENT, UNCOMMENT BELOW
    // 'gatsby-transformer-json',
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `localContent`,
    //     path: `${__dirname}/kommunity-content/content`,
    //     ignore: [`**/\.*`] // ignore files starting with a dot
    //   }
    // },
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        apiKey: process.env.AMPLITUDE_KEY,
        respectDNT: true
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://kaordi.us19.list-manage.com/subscribe/post?u=3c6e77efbbd8dd39c075858be&amp;id=36ab310d3e'
      }
    },
    `gatsby-plugin-netlify`
  ]
}
