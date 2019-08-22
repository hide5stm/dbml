module.exports = {
  title: 'DBML',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/home/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'CLI', link: '/cli/' },
      { text: 'Github',link: 'https://github.com/holistics/dbml'},
      { text: 'Community', link: 'https://github.com/holistics/dbml/issues/'}
    ],
    sidebarDepth: 2,
    sidebar: {
      '/docs/':[
        '',
        'tooling'
      ],
      //home sidebar
      '/home/':[
        ''
      ],
      '/cli/': [
        ''
      ],
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-47899822-13'
      }
    ]
  ]
}
