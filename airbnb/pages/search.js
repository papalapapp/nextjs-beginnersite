import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import FooterComp from "../components/Footer";
import Header from "../components/Header";
import SearchList from "../components/SearchList";

function Search() {
  const [view, setView] = useState("list");

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
      <Header container={false} />
      <main className="overflow-x-hidden w-full h-fit pt-12 md:pt-0">
        <div className="md:hidden fixed top-[70px] w-full z-10">
          <div className="w-[40vw] mx-auto bg-gray-200 flex justify-around rounded-full py-1 px-1">
            <button
              className={
                view === "list"
                  ? "flex-grow bg-white py-1 rounded-full"
                  : "flex-grow py-1 rounded-full text-gray-800"
              }
              onClick={() => setView("list")}
            >
              Liste
            </button>
            <button
              className={
                view === "map"
                  ? "flex-grow bg-white py-1 rounded-full"
                  : "flex-grow py-1 rounded-full text-gray-800"
              }
              onClick={() => setView("map")}
            >
              Karte
            </button>
          </div>
        </div>

        <div className="md:w-[50vw] lg:w-[60vw] xl:w-[65vw] w-screen pl-4 pr-2 pt-4 pb-4 border-t">
          <SearchList />
        </div>
      </main>

      <aside className="hidden md:block md:w-[50vw] lg:w-[40vw] xl:w-[35vw] h-screen sticky bottom-0 float-right pt-[90px] pl-2 pr-4 pb-4">
        <Image
          alt="map"
          src="/map.png"
          width={1600}
          height={2500}
          className="h-full rounded-3xl"
          style={{ objectFit: "cover" }}
        />
      </aside>

      <FooterComp container={false} />
    </>
  );
}

export default Search;
