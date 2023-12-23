import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};
function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={classNames(styles.layout, className)}>
      {children}
    </div>
  );
}

Layout.defaultProps = {
  className: '',
};

export default Layout;
