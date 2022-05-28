import React from 'react';
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';


const signIn = ({ providers }) => {
  console.log({ providers });
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default signIn;