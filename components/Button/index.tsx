import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type CustomButtonProps = {
  text: string;
  variant?: ButtonType;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const defaultProps = {
  variant: ButtonType.PRIMARY,
  onClick: () => {},
};

function Button({
  text,
  variant = ButtonType.PRIMARY,
  onClick,
  ...rest
}: CustomButtonProps) {
  return (
    <button
      type="button"
      className={classNames(styles.button, styles[variant])}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;
