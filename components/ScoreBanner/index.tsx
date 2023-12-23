import React, { useMemo } from 'react';
import { useAppSelector as useSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { IScore, StepType } from '@/types/score';
import Step from '@components/Step';

import styles from './styles.module.scss';

function ScoreList(): JSX.Element {
  const { questions, currentQuestionIndex } = useSelector(
    (state: RootState) => state.game,
  );

  const scores: IScore[] = useMemo(
    () =>
      questions
        .map((question, i) => ({
          score: question.reward,
          type:
            currentQuestionIndex < i
              ? StepType.INACTIVE
              : currentQuestionIndex === i
                ? StepType.CURRENT
                : StepType.FINISHED,
        }))
        .reverse(),
    [questions, currentQuestionIndex],
  );

  return (
    <ul className={styles.scores}>
      {scores.map(({ score, type }: IScore) => (
        <Step key={score} text={score.toLocaleString()} type={type} />
      ))}
    </ul>
  );
}

export default React.memo(ScoreList);
