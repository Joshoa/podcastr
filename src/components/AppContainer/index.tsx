import { ReactNode } from 'react';

import { usePlayer } from '../../contexts/PlayerContext';

import styles from './styles.module.scss';

type PlayerContextProviderProps = {
  children: ReactNode
}

export function AppContainer({ children }: PlayerContextProviderProps) {
  const { isDarkTheme } = usePlayer();

  return(
    <div className={isDarkTheme ? styles.container + ' ' + styles.darkTheme
                     : styles.container}>
      {children}
    </div>
  );
}