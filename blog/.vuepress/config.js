const path = require('path')

module.exports = {
  title: "Ding",
  description: '',
  head: [
    // ['script', { src: 'https://cdn.bootcdn.net/ajax/libs/medium-zoom/1.0.6/medium-zoom.min.js' }]
  ],
  cache: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '../images'
      }
    }
  },
  // theme: '@vuepress/theme-blog',
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/liudding',
        }
      ],
      copyright: [
       
      ],
    },
  },

  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    ["@vuepress/active-header-links"],
    ['smooth-scroll', true],
    ["@vuepress/medium-zoom", {
      selector: 'img',
      options: {
        margin: 16
      }
    }],

    ["@vuepress/blog", {
      directories: [
        {
          // Unique ID of current classification
          id: 'post',
          // Target directory
          dirname: '_posts',
          // Path of the `entry page` (or `list page`)
          path: '/',
          pagination: {
            lengthPerPage: 20,
          },
        },
      ],
      frontmatters: [
        {
          // Unique ID of current classification
          id: 'tag',
          // Decide that the frontmatter keys will be grouped under this classification
          keys: ['tag'],
          // Path of the `entry page` (or `list page`)
          path: '/tag/',
          // Layout of the `entry page`
          layout: 'Tags',
          // Layout of the `scope page`
          scopeLayout: 'Tag'
        },
      ],
      sitemap: {
        hostname: 'https://yourdomain'
      },
    },],

    "pangu",
    "vuepress-plugin-baidu-autopush",
    ["demo-code", {
      jsLibs: [
        // umd
        'https://unpkg.com/tua-storage/dist/TuaStorage.umd.js',
      ],
      cssLibs: [
        'https://unpkg.com/animate.css@3.7.0/animate.min.css',
      ],
      showText: 'show code',
      hideText: 'hide',
      styleStr: 'text-decoration: underline;',
      minHeight: 200,
      onlineBtns: {
        codepen: true,
        jsfiddle: true,
        codesandbox: true,
      },
      codesandbox: {
        deps: { 'lodash': 'latest' },
        json: '',
        query: '',
        embed: '',
      },
      demoCodeMark: 'demo-code',
      copyOptions: { },
    }]
  ]
}
