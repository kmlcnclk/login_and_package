import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Login from '../Components/Login.jsx';
import { getUserFromLocal } from '../LocalStorage/userLocalStorage.js';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/panel');
    const user = getUserFromLocal()[0];

    if (user) {
      router.push('/panel');
    }
  }, [router]);
  return (
    <div className="w-full">
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </div>
  );
}
