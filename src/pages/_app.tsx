import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme/theme';
import { EmptyLayout } from '@/layouts/EmptyLayout';
import { AppProvider } from '@/context/appContext';
import useScrollRestoration from '@/hooks/useScrollRestoration';

import '../styles/globalsOverride.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface AppProps {
  Component: any;
  pageProps: any;
  router: any;
}

function App({ Component, pageProps, router }: AppProps) {
  const Layout = Component.Layout ?? EmptyLayout;
  useScrollRestoration(router);
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
