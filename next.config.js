const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  distDir: 'dist',
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US'
  }
})
