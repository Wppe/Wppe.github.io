import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Her Lab</span>,
  project: {
    link: 'https://github.com/Wppe/Wppe.github.io',
  },
  chat: {
    link: 'https://telegram.org',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },

  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'zh-CN', text: '中文' }
  ]
}

export default config
