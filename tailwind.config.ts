// tailwind.config.js

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
 
}


 // daisyui: {
  //   themes: [
  //     {
  //       myDarkTheme: {
  //         "primary": "#020420", // رنگ اولیه
  //         "secondary": "#1A1A2E", // یک رنگ ثانویه دلخواه
  //         "accent": "#162447", // رنگ accent
  //         "neutral": "#191D32", // رنگ neutral
  //         "base-100": "#020420", // رنگ پس‌زمینه اصلی
  //         "info": "#3ABFF8",
  //         "success": "#36D399",
  //         "warning": "#FBBD23",
  //         "error": "#F87272",
  //       },
  //     },
  //   ],
  //   darkTheme: "myDarkTheme", // تغییر دارک تم به تم جدید
  //   base: true,
  //   styled: true,
  //   utils: true,
  //   prefix: "",
  //   logs: true,
  //   themeRoot: ":root",
  // },