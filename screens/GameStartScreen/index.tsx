import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '@components/Layout';
import Button from '@components/Button';
import Logo from '@/public/hand.svg';
import styles from './styles.module.scss';

function GameStartScreen() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/game');
  };

  return (
    <Layout className={styles.background}>
      <div className={styles.contentWrapper}>
        <Image src={Logo} alt="Logo" className={styles.picture} />
        <div className={styles.leftSide}>
          <h1 className={styles.title}>
            Who wants to be a millionaire?
          </h1>
          <Button onClick={handleStart} text="Start" />
        </div>
      </div>
    </Layout>
  );
}
export default GameStartScreen;
