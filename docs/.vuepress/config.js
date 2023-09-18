import { containerPlugin } from '@vuepress/plugin-container'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

module.exports = {
  lang: 'nl_BE',
  title: 'IoT Lab StartUp',
  description: 'Curus voor Graduaat studenten Internet Of Things VIVES Kortrijk',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?familiy=Material+Icons' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML', async: true }]
  ],

  theme: defaultTheme({
    logo: 'https://www.vives.be/sites/default/files/uploads/huisstijl/Logo VIVES Hogeschool - Smile.png',
    navbar: [
      { text: 'Toledo', link: 'https://toledo.kuleuven.be/portal' },
      { text: 'Report Issue', link: 'https://github.com/WimDejonghe/iot-lab-startup/issues' },
      { text: 'Organization', link: 'https://github.com/WimDejonghe/iot-lab-startup' }
     
    ],
    sidebar: [
      {
        text: 'About this Course',
        link: '/about-this-course/README.md',
      },
      {
        text: 'Introduction to Micro:Bit',
        children: [
          '/a-introductory/01-introduction/README.md',
          '/a-introductory/02-introduction/README.md',
          '/a-introductory/03-introduction/README.md',
          '/a-introductory/04-introduction/README.md',
          
        ]
      },
      {
        text: 'Micro:Bit kennismaking',
        children: [
          '/b-mb/01-ledmatrix/README.md',
          '/b-mb/02-var/README.md',
          '/b-mb/03-for/README.md',
          '/b-mb/04-ser/README.md',
          '/b-mb/05-event/README.md',
          
                   
        ]
      },
     
    ],
    sidebarDepth: 1,
    repo: 'WimDejonghe/iot-lab-startup',
    docsDir: 'docs',
    docsBranch: 'master'
  }),
  serviceWorker: true,
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    containerPlugin({
      type: 'codeoutput',
      locales: {
        '/': {
          defaultInfo: 'Output',
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    
  ],
}