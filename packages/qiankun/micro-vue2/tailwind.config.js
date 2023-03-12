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
  important: '#micro-vue2-app',
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
        'sideBarBgColor': '#333951',
        'navBarBgColor': '#333951',
        'sideBarTitleColor': '#00b9ef',
        'themeColor': '#00b9ef',
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
    preflight: !process.env.QIANKUN,
  },
  plugins: [
  ],
}
