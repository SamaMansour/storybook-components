import { extendTheme } from '@chakra-ui/react';

const config = {
  useSystemColorMode: false,
};

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        bg: 'blue',
        backgroundColor: 'blue',
        color: 'white',
      }
    }
  }
})

export const parameters = {
  chakra: { theme },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}