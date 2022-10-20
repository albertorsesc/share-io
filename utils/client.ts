import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'sigv2gzv',
  dataset: 'production',
  apiVersion: '2022-08-19',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
