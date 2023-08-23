import React from "react";
import Image from "next/image";
import { Sacramento, Open_Sans } from "next/font/google";
import { stolovi } from "@/lib/utils";
import StoloviSearch from "@/components/stoloviSearch";

const greatVibesFont = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--great-vibes",
  display: "swap",
});

const openSansFont = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--open-sans",
  display: "swap",
});

export const metadata = {
  title: "Naše vjenčanje | Filipa & Nikola",
  description: "Raspored stolova za naše vjenčanje.",
  type: "website",
  date: "2023-08-25",
  keywords: "Filipa i Nikola",
  url: "https://filipainikola.com/stolovi",
};

function Stolovi() {
  return (
    <main
      className={`${greatVibesFont.className} ${greatVibesFont.variable} ${openSansFont.className} bg-white w-screen min-h-screen `}
    >
      <div
        className={
          "flex flex-col h-100 mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-slate-400  relative"
        }
        style={{
          minWidth: "400px",
          maxWidth: "600px",
          background: "#FDFCF8",
          zIndex: 10,
        }}
      >
        <div>
          <Image
            src="/images/flower_top2.png"
            alt="hero"
            width={600}
            height={600}
          />
        </div>
        <div
          className="text-6xl w-100 flex flex-col justify-center items-center m-24 mb-10 gap-6"
          style={{ marginTop: "-40px" }}
        >
          <h1 className="font-vibes">Filipa</h1>
          <p
            style={{
              fontSize: "20px",
              marginLeft: "40px",
              marginTop: "-10px",
            }}
          >
            i
          </p>
          <h1 className="font-vibes" style={{ marginTop: "-40px" }}>
            Nikola
          </h1>
        </div>
        <div className=" w-100 flex flex-col justify-center items-center gap-6">
          <h2
            className="font-sans text-center"
            style={{
              fontWeight: "bold",
              letterSpacing: "3px",
              fontSize: "0.7em",
            }}
          >
            DRAGI NAŠI, DOBRODOŠLI NA NAŠU SVADBU!
          </h2>
          <h2
            className="font-sans text-center"
            style={{
              fontWeight: "bold",
              letterSpacing: "3px",
              fontSize: "0.7em",
            }}
          >
            ISPOD MOŽETE PRONAĆI RASPORED STOLOVA.
          </h2>
        </div>
        <div className="w-100 flex flex-col justify-center items-center  m-10">
          <StoloviSearch />
        </div>
        <div className="w-100 flex flex-col justify-center items-center  m-10">
          <h1
            className="font-sans"
            style={{
              fontWeight: "700",
              letterSpacing: "0.15em",
              fontSize: "1.21em",
            }}
          >
            PETAK, 25.08.2023.
          </h1>
        </div>

        <div>
          <Image
            src="/images/flower_bottom.png"
            alt="hero"
            width={600}
            height={600}
          />
        </div>
      </div>
    </main>
  );
}

export default Stolovi;
