import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LoginComponent from './LoginComponent';

function Login() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  useEffect(() => {
    router.prefetch('/panel');
  }, [router]);

  return (
    <div>
      <LoginComponent
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        router={router}
      />
    </div>
  );
}

export default Login;
