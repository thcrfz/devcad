import { signIn, useSession } from 'next-auth/client';
import React from 'react';
import SignIn from '../components/SignIn';
import Home from '../containers/Home';

export default function Index() {
  const [session] = useSession();

  return (
    <>
      {!session && (
        <div>
          <SignIn handleSingIn={() => signIn('auth0')} />
        </div>
      )}
      {session && <Home />}
    </>
  );
}
