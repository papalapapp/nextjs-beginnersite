import Head from "next/head";
import Image from "next/image";
import React from "react";
import FooterComp from "../components/Footer";
import Header from "../components/Header";
import SearchList from "../components/SearchList";

function search() {
  return (
    <>
      <Head>
        <title>Unterkünfte in USA 15. Jan. 2023 - StayNest</title>
        <meta
          name="description"
          content="Finde die perfekte Unterkunft für einen super Preis in 191 Ländern. Fühl dich mit Airbnb weltweit zuhause."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header container={false}/>
      <main className="overflow-x-hidden w-full min-h-screen">
        <div className="flex">
          <div className="flex-grow  h-screen mt-6 px-4">
            <SearchList />
          </div>
          <div className="flex-grow max-w-[38vw]  h-screen mt-6 px-4 sticky top-[100px]">
              <Image
              alt="map"
              src="/map.png"
              width={1600}
              height={2500}
              className="h-full rounded-3xl"
              style={{ objectFit: "cover" }} />
            </div>
        </div>
      </main>
      <FooterComp container={false}/>
    </>
  );
}

export default search;
