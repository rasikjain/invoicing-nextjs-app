'use client';

import NextError from 'next/error';

const Error = ({ error }: { error: Error }) => {
  console.log('alfa error', error);
  return <NextError statusCode={500} title={error.message} />;
};

export default Error;
