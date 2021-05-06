import { GetServerSideProps } from 'next';
import { signIn, useSession } from 'next-auth/client';
import React from 'react';
import SignIn from '../components/SignIn';
import Home from '../containers/Home';
import { getAllDevelopers } from '../data/developers/get-all-developers';
import { DeveloperData } from '../domain/posts/post';

export type HomeProps = {
  developers: DeveloperData[];
};

export default function Index({ developers }: HomeProps) {
  const [session] = useSession();

  return (
    <>
      {!session && (
        <div>
          <SignIn handleSingIn={() => signIn('auth0')} />
        </div>
      )}
      {session && <Home developers={developers} />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const developers = await getAllDevelopers();
  return {
    props: { developers }
  };
};
