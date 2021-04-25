import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

import { usePlayer } from '../../contexts/PlayerContext';

import styles from './styles.module.scss';

export function Header() {

  const { isDarkTheme } = usePlayer();

  const headerContainer = isDarkTheme ? styles.headerContainer + ' ' + styles.darkTheme 
    : styles.headerContainer;
  
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  });

  return(
    <header className={headerContainer}>
      <Link href="/">
        <img src="/logo.svg" alt="Podcastr"/>
      </Link>

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  );
}