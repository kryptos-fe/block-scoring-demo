import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme/theme.js';
import { EmptyLayout } from '@/layouts/EmptyLayout.js';
import { AppProvider } from '@/context/appContext.js';
import useScrollRestoration from '@/hooks/useScrollRestoration.js';

import '../styles/globalsOverride.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App({ Component, pageProps, router }) {
  const Layout = Component.Layout ?? EmptyLayout;
  useScrollRestoration(router);
  return (
      <ChakraProvider theme={theme} position="relative">
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </ChakraProvider>
  );
}

export default App;
