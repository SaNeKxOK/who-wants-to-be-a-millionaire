import Head from 'next/head';
import GameStartScreen from '@/screens/GameStartScreen';

export default function Home() {
  return (
    <>
      <Head>
        <title>Who wants to be a millionaire?</title>
        <meta
          name="description"
          content="Who wants to be a millionaire?"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <GameStartScreen />
    </>
  );
}
