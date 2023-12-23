import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { ScreenType } from '@/types';

import styles from './styles.module.scss';

export enum OptionType {
  INACTIVE = 'inactive',
  CORRECT = 'correct',
  WRONG = 'wrong',
}

interface OptionButtonProps {
  onClick?: () => void;
  letter: string;
  text: string;
  type?: OptionType;
}

function OptionButton({
  onClick,
  letter,
  text,
  type = OptionType.INACTIVE,
}: OptionButtonProps) {
  const screen = useAppSelector(
    (state: RootState) => state.ui.screen,
  );

  const renderSvg = useCallback(() => {
    switch (screen) {
      case ScreenType.DESKTOP_PLUS:
        return (
          <svg
            className={classNames(styles.buttonSvg, styles[type])}
            width="421"
            height="72"
            viewBox="0 0 421 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M404 36L421 36" stroke="#D0D0D8" />
            <path d="M0 36L17 36" stroke="#D0D0D8" />
            <path
              d="M39.8137 5.09773C41.9857 2.2033 45.3933 0.5 49.012 0.5H371.988C375.607 0.5 379.014 2.2033 381.186 5.09773L404.375 36L381.186 66.9023C379.014 69.7967 375.607 71.5 371.988 71.5H49.012C45.3933 71.5 41.9857 69.7967 39.8137 66.9023L16.6251 36L39.8137 5.09773Z"
              fill="white"
              stroke="#D0D0D8"
            />
          </svg>
        );
      default:
        return (
          <svg
            className={classNames(styles.buttonSvg, styles[type])}
            width="23.5rem"
            height="5rem"
            viewBox="0 0 320 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M303 28L320 28" stroke="#D0D0D8" />
            <path d="M0 28L17 28" stroke="#D0D0D8" />
            <path
              d="M42.1754 0.5H277.825C281.539 0.5 285.024 2.29361 287.183 5.31576L303.386 28L287.183 50.6842C285.024 53.7064 281.539 55.5 277.825 55.5H42.1754C38.4615 55.5 34.9762 53.7064 32.8175 50.6842L16.6145 28L32.8175 5.31576C34.9762 2.29361 38.4615 0.5 42.1754 0.5Z"
              fill="#D0D0D8"
              stroke="#D0D0D8"
            />
          </svg>
        );
    }
  }, [type, screen]);

  return (
    <div>
      <button
        type="button"
        tabIndex={letter[0].charCodeAt(0)}
        className={styles.button}
        onClick={onClick}
        aria-pressed="false"
      >
        <p className={styles.letterWrapper}>{letter}</p>
        {renderSvg()}
        <p className={styles.answerWrapper}>{text}</p>
      </button>
    </div>
  );
}

OptionButton.defaultProps = {
  onClick: null,
  type: OptionType.INACTIVE,
};

export default React.memo(OptionButton);
