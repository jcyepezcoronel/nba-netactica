import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app'

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: 'small'
      }
    },
    MuiSelect: {
      defaultProps: {
        fullWidth: true,
        size: 'small'
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained'
      }
    }
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
