import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import PanelComponent from '../Components/PanelComponent';
import { packages } from '../Requsets/packages';
import { useRouter } from 'next/router';
import { getUserFromLocal } from '../LocalStorage/userLocalStorage';

function Panel() {
  const router = useRouter();

  const [results, setResults] = useState([]);
  const [errorState, setErrorState] = useState(false);
  const [errorValue, setErrorValue] = useState('');

  useEffect(() => {
    router.prefetch('/');

    const user = getUserFromLocal()[0];
    if (!user) {
      router.push('/');
    }

    const a = async () => {
      await setErrorState(false);

      const res = await packages();

      if (res.message.description) {
        await setErrorValue(res.message.description);
        await setErrorState(true);
      }

      if (res.result[0]) {
        await setResults(res.result);
      }
    };
    a();
  }, [setResults, router]);

  return (
    <div>
      <Head>
        <title>Panel</title>
      </Head>
      {results[0] ? (
        <PanelComponent
          results={results}
          setResults={setResults}
          router={router}
          errorState={errorState}
          setErrorState={setErrorState}
          errorValue={errorValue}
        />
      ) : null}
    </div>
  );
}

export default Panel;
