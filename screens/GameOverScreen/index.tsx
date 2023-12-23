import Image from 'next/image';
import Head from 'next/head';
import Layout from '@components/Layout';
import Logo from '@/public/hand.svg';
import Button from '@/components/Button';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { resetGame } from '@/store/gameSlice';

import styles from './styles.module.scss';

function GameOverScreen() {
  const dispatch = useAppDispatch();
  const score = useAppSelector(
    (state: RootState) => state.game.score,
  );

  const onReset = () => {
    dispatch(resetGame());
  };

  return (
    <>
      <Head>
        <title>GAME OVER</title>
        <meta
          name="description"
          content="Who wants to be a millionaire?"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <Layout className={styles.gameOverScreen}>
        <div className={styles.contentWrapper}>
          <Image src={Logo} alt="Logo" className={styles.picture} />
          <div className={styles.leftSide}>
            <div className={styles.textWrapper}>
              <p className={styles.label}>Total score:</p>
              <h1 className={styles.title}>${score} earned</h1>
            </div>
            <Button onClick={onReset} text="Try again" />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default GameOverScreen;
