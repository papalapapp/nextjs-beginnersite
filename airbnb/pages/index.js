import Head from "next/head";
import BecomeHostBanner from "../components/BecomeHostBanner";
import Features from "../components/Features";
import FooterComp from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PopularPlaces from "../components/PopularPlaces";
import React, { useState } from "react";


export default function Home({ accommodationSuggestions }) {
  


  return (
    <>
      <Head>
        <title>StayNest - Ferienwohnungen und Apartments</title>
        <meta
          name="description"
          content="Finde die perfekte Unterkunft für einen super Preis in 191 Ländern. Fühl dich mit Airbnb weltweit zuhause."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header searchBarShowingHeight={675} />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <Features />
        <PopularPlaces />
        <BecomeHostBanner />


        
      </main>
      <FooterComp />
    </>
  );
}

// export async function getStaticProps() {
//   const accommodationSuggestions = await fetch(
//     "https://www.jsonkeeper.com/b/4G1G"
//   ).then((res) => res.json());

//   return {
//     props: {
//       accommodationSuggestions,
//     },
//   };
// }
