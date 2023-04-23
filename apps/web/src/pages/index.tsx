import Head from 'next/head';
import { Button } from 'ui';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web - Turborepo Example</title>
      </Head>

      <main className='m-4'>
        <Button primary label='Docs' />
      </main>
    </div>
  );
}
