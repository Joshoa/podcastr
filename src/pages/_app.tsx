import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext';

import '../styles/global.scss';
import React from 'react';
import { AppContainer } from '../components/AppContainer';

function MyApp({ Component, pageProps }) {

  return(
    <PlayerContextProvider>
      <AppContainer>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </AppContainer>
    </PlayerContextProvider>
  )
}

export default MyApp
