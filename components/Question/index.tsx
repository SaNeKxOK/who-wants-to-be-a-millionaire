import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useAppDispatch } from '@/store/hooks';
import { endGame, goToTheNextQuestion } from '@/store/gameSlice';
import { IOption } from '@/types';
import OptionButton, { OptionType } from '../OptionButton';

import styles from './styles.module.scss';

function Question() {
  const dispatch = useAppDispatch();
  const [userAnswer, setUserAnswer] = useState<IOption | null>(null);
  const currentQuestion = useSelector(
    (state: RootState) =>
      state.game.questions[state.game.currentQuestionIndex],
  );

  const onAnswer = (answer: IOption) => {
    setUserAnswer(answer);
    setTimeout(() => {
      setUserAnswer(null);
      if (answer.isCorrect) {
        dispatch(goToTheNextQuestion());
      } else {
        dispatch(endGame());
      }
    }, 3000);
  };

  const renderOptionButton = (option: IOption) => {
    let optionType;
    if (userAnswer && userAnswer.questionId === option.questionId) {
      if (userAnswer.id === option.id) {
        optionType = option.isCorrect
          ? OptionType.CORRECT
          : OptionType.WRONG;
      } else if (option.isCorrect) {
        optionType = OptionType.CORRECT;
      }
    }
    return (
      <OptionButton
        key={option.id}
        letter={option.letter}
        text={option.text}
        onClick={() => !userAnswer && onAnswer(option)}
        type={optionType}
      />
    );
  };

  return (
    <div className={styles.questionWrapper}>
      <div className={styles.questionTextWrapper}>
        <h2>{currentQuestion?.question}</h2>
      </div>
      <div className={styles.options}>
        {currentQuestion?.options?.map(renderOptionButton)}
      </div>
    </div>
  );
}

export default React.memo(Question);
