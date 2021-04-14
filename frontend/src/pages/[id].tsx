import { GetStaticPaths, GetStaticProps } from "next";
import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";
import NavBar from "../components/navbar";
import SignIn from "../components/SignIn";
import DynamicDevs from "../containers/DynamicDevs";
import {
  getAllDevelopers,
  getIdDevelopers
} from "../data/developers/get-all-developers";
import { DeveloperData } from "../domain/posts/post";

export type DynamicDevProps = {
  developers: DeveloperData;
};

export default function IdDevs({ developers }: DynamicDevProps) {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <div>
          <SignIn handleSingIn={() => signIn("auth0")} />
        </div>
      )}
      {session && (
        <>
          <NavBar handleLogout={() => signOut()} />
          <DynamicDevs developers={developers} />
        </>
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const developers = await getAllDevelopers();

  return {
    paths: developers.map((dev) => {
      return {
        params: {
          id: dev.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const developers = await getIdDevelopers(params.id);
  return {
    props: { developers },
  };
};
