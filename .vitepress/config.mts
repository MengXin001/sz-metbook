import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'
import path from 'path'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

export default defineConfig({
  title: "深圳气象录",

  sitemap: {
    hostname: 'https://szmet.mashirox.com',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-2Q3MG3PCWX' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2Q3MG3PCWX');`
    ]
  ],

  description: "Shenzhen Met",
  themeConfig: {
    nav: nav(),
    logo: { src: '/logo.png', width: 24, height: 24 },
    sidebar: {
      '/': { base: '/', items: sidebarGuide() },
    },

    editLink: {
      pattern: 'https://github.com/MengXin001/sz-metbook/edit/main/:path',
      text: '在Github上编辑此页面'
    },

    footer: {
      message: 'Released under the CC BY-NC-SA 4.0 License ｜ 基于 CC BY-NC-SA 4.0 许可发布',
      copyright: `Copyright © 2019-${new Date().getFullYear()} SZMET`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MengXin001/sz-metbook' }
    ],

    search: {
      provider: 'local'
    }
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: '国家基本站概况',
      link: '/data/datasets-standard',
    },
    {
      text: '全市主要天气过程',
      items: [
        {
          text: '2017年',
          link: '/szmet/2017'
        },
        {
          text: '2018年',
          link: '/szmet/2018'
        },
        {
          text: '2019年',
          link: '/szmet/2019'
        },
        {
          text: '2020年',
          link: '/szmet/2020'
        },
        {
          text: '2021年',
          link: '/szmet/2021'
        },
        {
          text: '2022年',
          link: '/szmet/2022'
        },
        {
          text: '2023年',
          link: '/szmet/2023'
        },
        {
          text: '2024年',
          link: '/szmet/2024'
        },
        {
          text: '2025年',
          link: '/szmet/2025'
        },
      ]
    },
    {
      text: '深圳市热带气旋风力统计',
      link: 'data/typhoon'
    },
    {
      text: '专题报告',
      items: [
        {
          text: '强对流',
          items: [
            { text: 'Template', link: '/report/severe-weather/template' }
          ]
        },
        {
          text: '台风',
          items: [
            { text: '2309 苏拉', link: '/report/typhoon/2309' },
            { text: '2311 海葵', link: '/report/typhoon/2311' },
          ]
        },
      ]
    },
    {
      text: 'Wiki',
      items: [
        {
          text: 'Radar',
          link: '/wiki/radar'
        },
        {
          text: 'Station Standard',
          link: '/wiki/station-standard'
        }
      ]
    },
    {
      text: pkg.version,
      items: [
        {
          text: '更新日志',
          link: '/CHANGELOG'
        },
        {
          text: '参与贡献',
          link: '/edit'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '国家基本站概况',
      collapsed: true,
      items: [
        { text: '深圳市国家基本气象站1991-2020年气候值数据集', link: 'data/datasets-standard' },
        { text: '深圳市国家气候观象台基本观测和拓展观测业务', link: 'data/operation' },
        { text: '深圳市2006-2025年热带气旋风力统计', link: 'data/typhoon' },
        { text: '深圳市街道气象站代表站', link: 'data/streets-stations' },
      ]
    },
    {
      text: '全市主要天气过程',
      collapsed: false,
      items: [
        {
          text: '2017年',
          link: 'szmet/2017'
        },
        {
          text: '2018年',
          link: 'szmet/2018'
        },
        {
          text: '2019年',
          link: 'szmet/2019'
        },
        {
          text: '2020年',
          link: 'szmet/2020'
        },
        {
          text: '2021年',
          link: 'szmet/2021'
        },
        {
          text: '2022年',
          link: 'szmet/2022'
        },
        {
          text: '2023年',
          link: 'szmet/2023'
        },
        {
          text: '2024年',
          link: 'szmet/2024'
        },
        {
          text: '2025年',
          link: 'szmet/2025'
        },
        {
          text: '1874年-1943年',
          link: 'szmet/1874x'
        },
        {
          text: '1952年-1978年',
          link: 'szmet/1952x'
        },
        {
          text: '1979年-2006年',
          link: 'szmet/1979x'
        },
        {
          text: '预览内容（未完成整理）🚧 ',
          link: 'szmet/preview'
        },
      ]
    },
    {
      text: '专题报告',
      collapsed: false,
      items: [
        {
          text: '强对流',
          collapsed: true,
          items: [
            { text: 'Template', link: 'report/severe-weather/template' }
          ]
        },
        {
          text: '台风',
          collapsed: true,
          items: [
            { text: '2309 苏拉', link: 'report/typhoon/2309' },
            { text: '2311 海葵', link: 'report/typhoon/2311' },
          ]
        },
      ]
    },
    {
      text: 'Wiki',
      collapsed: true,
      items: [
        { text: 'Radar', link: 'wiki/radar' },
        { text: 'Station Standard', link: 'wiki/station-standard' },
      ]
    },
    {
      text: '实验性功能',
      collapsed: true,
      items: [
      ]
    },
    { text: '编辑', link: 'edit' },
    { text: '内容编写参考', link: 'markdown-examples' }
  ]
}
