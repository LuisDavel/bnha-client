import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import LandingPage from 'template/Ladingpage';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({
  Component,
  pageProps: { ...pageProps }
}: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>BNHA Hero Legacy</title>
        <meta
          name="description"
          content="Site criado para fins de auxiliar na integração de novos player o ao BNHA Hero's Legacy"
        />
      </Head>
      <GlobalStyles />
      <LandingPage>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </LandingPage>
    </ThemeProvider>
  );
}
