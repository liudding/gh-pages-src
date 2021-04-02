const path = require('path')

module.exports = {
    title: "Ding",
    description: '',
    head: [],
    cache: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@images': '../images'
            }
        }
    },
    themeConfig: {
        modifyBlogPluginOptions(blogPluginOptions) {
            return blogPluginOptions
        },
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
            selector: 'article img',
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
                    id: 'tag',
                    keys: ['tag'],
                    path: '/tag/',
                    layout: 'Tags',
                    scopeLayout: 'Tag'
                },
            ],
            sitemap: {
                hostname: 'https://liudding.github.io'
            },
        },],

        "pangu",
        "vuepress-plugin-baidu-autopush",
        ["vuepress-plugin-demo-code", {
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
            copyOptions: {},
        }]
    ]
}
