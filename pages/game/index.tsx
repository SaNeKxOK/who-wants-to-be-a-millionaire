import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Layout from '@components/Layout';
import ScoreBanner from '@components/ScoreBanner';
import Question from '@/components/Question';
import useWindowWidth from '@/hooks/useWindowWidth';
import { RootState } from '@/store/store';
import { useAppDispatch as useDispatch } from '@/store/hooks';
import { saveScreen } from '@/store/uiSlice';
import { setQuestions } from '@/store/gameSlice';
import gameConfig from '@/quiz_config.json';
import { IQuestion } from '@/types';
import MenuIcon from '@/public/Menu.svg';
import CloseIcon from '@/public/Close.svg';
import GameOverScreen from '@/screens/GameOverScreen';

import styles from './styles.module.scss';

interface IGame {
  questions: IQuestion[];
}

function Game({ questions }: IGame) {
  const { width } = useWindowWidth();
  const dispatch = useDispatch();
  const { gameOver } = useSelector((state: RootState) => state.game);
  const [showScore, setShowScore] = useState(false);
  const toggleShowScore = () => setShowScore((b) => !b);

  useEffect(() => {
    dispatch(saveScreen({ windowSize: width }));
  }, [dispatch, width]);

  useEffect(() => {
    dispatch(setQuestions(questions));
  }, [dispatch, questions]);

  if (gameOver) return <GameOverScreen />;

  const renderDesktop = (
    <>
      <Question />
      <ScoreBanner />
    </>
  );

  const renderMobile = showScore ? <ScoreBanner /> : <Question />;

  return (
    <>
      <Head>
        <title>The game is in progress</title>
      </Head>
      <Layout className={styles.layout}>
        <Image
          className={styles.switchButton}
          src={showScore ? CloseIcon : MenuIcon}
          onClick={toggleShowScore}
          alt={showScore ? 'Close score' : 'Open score'}
        />
        {width >= 1024 ? renderDesktop : renderMobile}
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      questions: gameConfig.questions,
    },
  };
};

export default Game;
