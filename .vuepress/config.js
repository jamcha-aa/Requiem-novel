const summary = require('./summary.js');

module.exports = {
    title: 'Requiem: クリームパーレ',
    description: 'いずれ，この星はオブリビオンの世界へと戻るのだ。',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    themeConfig: {
        nav: [
            { text: 'ホーム', link: '/' },
            { text: '作品一覧', link: 'https://jamcha-aa.github.io/About/' },
            { text: 'GitHub', link: 'https://github.com/jamcha-aa/Requiem-novel/' }
        ],
        sidebar: {
            '/article/': summary.genSidebarConfig('目次')
        },
        search: false,
    },
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
    ],
    base: '/Requiem-novel/',
    dest: '.vuepress/dist',
    plugins: ['@vuepress/plugin-back-to-top']
}
