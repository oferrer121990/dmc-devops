import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DMC DevOps Docs',
  description: 'Documentación del proyecto DMC DevOps',
  base: '/dmc-devops/',
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0ea5e9' }],
    ['link', { rel: 'icon', href: '/dmc-devops/favicon.svg' }]
  ],
  themeConfig: {
    logo: { src: '/dmc-devops/favicon.svg', alt: 'DMC DevOps' },
    nav: [
      { text: 'Guía', link: '/guia/introduccion' },
      { text: 'API', link: '/api/' }
    ],
    sidebar: {
      '/guia/': [
        {
          text: 'Guía',
          items: [
            { text: 'Introducción', link: '/guia/introduccion' },
            { text: 'Empezar', link: '/guia/empezar' },
            { text: 'Buenas prácticas', link: '/guia/buenas-practicas' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            { text: 'Resumen', link: '/api/' },
            { text: 'Endpoints', link: '/api/endpoints' }
          ]
        }
      ]
    },
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/oferrer121990/dmc-devops' }],
    footer: {
      message: 'Publicado bajo MIT',
      copyright: '© 2025 Oman'
    }
  }
})
