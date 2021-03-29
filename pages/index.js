
import Head from 'next/head';
import React, { useEffect, useState } from 'react';


const Home = ({ photo, title, image, studentId, campaignId }) => {
 
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content="your url" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="456999284463151" />
        <meta property="og:title" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content={image} />
      </Head>
      <h2>{title}</h2>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const {query} = context;
  let photo = null;
  await fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then((response) => response.json())
    .then((json) => {
      photo = json;

    })

  return {
    props: {
      photo,
      title: query.title,
      image: query.image,
      studentId: query.studentId,
      campaignId: query.campaignId
    },
  };
};

export default Home




