import { DeveloperData } from '../domain/posts/post';
import { GetServerSideProps } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';
import { getAllDevelopers } from '../data/developers/get-all-developers';
import NavBar from '../components/navbar';
import React from 'react';
import ListDeveloper from '../containers/ListDevelopers';
import DynamicDevs from '../containers/DynamicDevs';
import SignIn from '../components/SignIn';

export type HomeProps = {
  developers: DeveloperData[];
  developer: DeveloperData;
};

export default function Index({ developers, developer }: HomeProps) {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <div>
          <SignIn handleSingIn={() => signIn('auth0')} />
        </div>
      )}
      {session && (
        <>
          <NavBar handleLogout={() => signOut()} />
          <DynamicDevs developers={developer} />
          <ListDeveloper developers={developers} />
        </>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const developers = await getAllDevelopers();
  return {
    props: { developers }
  };
};
