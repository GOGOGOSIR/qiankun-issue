const plugin = require('tailwindcss/plugin')

const defaultTheme = () => {
  const spacing = {}
  const borderRadius = {}
  const fontSize = {}
  for (let i = 0; i <= 180; i++) {
    if (i <= 20)
      borderRadius[i] = `${i}px`

    if (i >= 8 && i <= 30)
      fontSize[i] = `${i}px`

    spacing[i] = `${i}px`
  }

  return {
    spacing,
    fontSize,
    borderRadius: {
      ...borderRadius,
      full: '100%',
    },
  }
}

module.exports = {
  important: '#app-body',
  content: ['*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    ...defaultTheme(),
    fontWeight: {
      400: 400,
      500: 500,
      600: 600,
      bold: 'bold',
    },
    extend: {
      colors: {
        'sideBarBgColor': '#2a2929',
        'navBarBgColor': '#2a2929',
        'sideBarTitleColor': '#67c23a',
        'themeColor': '#67c23a',
        'white-5': 'rgba(255, 255, 255, 0.05)',
        'white-300': 'rgba(255, 255, 255, 0.3)',
      },
      zIndex: {
        1: 1,
        2: 2,
        2000: 2000,
      },
      backgroundSize: {
        full: '100% 100%',
      },
    },
  },
  // 禁用核心插件
  corePlugins: {
    // preflight: false,
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.el-button': {
          'border-width': '1px',
        },
      })
    }),
  ],
}
