/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
        alt: 'BaiJamjuree_700Bold',
      },
      colors: {
        white: {
          50: '#FFFFFF',
          100: '#F0F0F5',
        },
        red: {
          50: '#E02041',
        },
        gray: {
          50: '#DCDCE5',
          100: '#A8A8B3',
          150: '#737380',
          200: '#41414D',
          250: '#13131A',
        },
      },
      fontSize: {
        base: ['15px', '24px'],
      },
    },
  },
  plugins: [],
}
