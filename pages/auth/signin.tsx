import React from 'react';
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';


const signIn = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log({ providers });
  return (
    <>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default signIn;