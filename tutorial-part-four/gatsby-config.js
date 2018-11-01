module.exports = {
  siteMetadata: {
    title: 'Pandas Eating Lots',
    subtitle: '...and then some more'
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
};