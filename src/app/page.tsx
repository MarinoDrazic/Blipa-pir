"use client";

import Image from "next/image";
import { Sacramento, Open_Sans } from "next/font/google";
import { Guest, Invite } from "@/types/types";
import { useState } from "react";

const greatVibesFont = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--great-vibes",
});

const openSansFont = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--open-sans",
});

const timeTable = [
  {
    time: "16:30",
    event: "TRATAMENAT ZRNO SOLI",
    location: "UVALA BALUNI 8, 21000 SPLIT",
  },
  {
    time: "19:00",
    event: "OBRED VJENČANJA",
    location: "CRKVA SV.STJEPANA, SUSTIPAN",
  },
  {
    time: "20:30",
    event: "PIĆE DOBRODOŠLICE",
    location: "RESTORAN POLJUD",
  },
  {
    time: "21:30",
    event: "VEČERA",
    location: "RESTORAN POLJUD",
  },
];
const dummyInvitee: Invite = {
  id: "1",
  guests: [
    {
      id: "1",
      name: "Marino Dražić",
      coming: false,
    },
    {
      id: "2",
      name: "Magda Franjo",
      coming: false,
    },
  ],
  responded: false,
  inviteCode: "123456-hehe-haha-123456",
};

export default function Home() {
  const [invite, setInvite] = useState<Invite>(dummyInvitee);

  const handleComing = (guest: Guest, isComing: boolean) => {
    const newGuests = invite.guests.map((g) => {
      if (g.id === guest.id) {
        return { ...g, coming: isComing };
      }
      return g;
    });
    setInvite({ ...invite, guests: newGuests });
  };

  return (
    <main
      className={`${greatVibesFont.variable} ${openSansFont.variable} bg-white w-screen min-h-screen flex `}
    >
      <div
        className={
          "flex flex-col h-100 mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-slate-400"
        }
        style={{
          minWidth: "500px",
          maxWidth: "600px",
          marginTop: "40px",
          background: "#FDFCF8",
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
            style={{ fontSize: "20px", marginLeft: "40px", marginTop: "-10px" }}
          >
            i
          </p>
          <h1 className="font-vibes" style={{ marginTop: "-40px" }}>
            Nikola
          </h1>
        </div>
        <div className=" w-100 flex flex-col justify-center items-center gap-6">
          <h1
            className="font-sans"
            style={{ fontWeight: "bold", letterSpacing: "3px" }}
          >
            DRAGI{" "}
            {invite.guests
              .map((g) => g.name.split(" ")[0].toUpperCase())
              .join(" I ")}
            ,
          </h1>
          <p
            className="font-sans"
            style={{
              color: "#333",
              fontWeight: "400",
              letterSpacing: "0.05em",
              fontSize: "14px",
            }}
          >
            pozivamo vas da budete dio našeg velikog dana!
          </p>
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

        <div className="w-100 flex flex-col justify-center items-start gap-6 mt-8">
          {timeTable.map((time, index) => (
            <div className="flex w-96 m-auto " key={time.event}>
              <p
                style={{
                  fontWeight: "600",
                  letterSpacing: "2px",
                  fontSize: "1.07em",
                }}
                className="mr-6 flex-3"
              >
                {time.time}
              </p>
              <div className="flex flex-col flex-1">
                <p
                  style={{
                    fontWeight: "600",
                    letterSpacing: "2px",
                    marginBottom: "0.26em",
                    fontSize: "1.07em",
                  }}
                >
                  {time.event}
                </p>
                <p
                  style={{
                    fontWeight: "300",
                    letterSpacing: "2px",
                    fontSize: "12px",
                  }}
                >
                  {time.location}
                </p>
              </div>
            </div>
          ))}

          <div>
            <Image
              src="/images/flower_one.png"
              alt="hero"
              width={600}
              height={600}
            />
          </div>
          <div
            className="w-full flex flex-col  justify-center items-center mb-0"
            style={{ marginTop: "-150px" }}
          >
            <p
              className="font-sans"
              style={{
                color: "#333",
                fontWeight: "400",
                letterSpacing: "0.05em",
                fontSize: "14px",
                paddingLeft: "1em",
              }}
            >
              svoj dolazak, molimo, potvrdite <br />
              <span style={{ paddingLeft: "1.25em" }}>
                ovdje do 15. kolovoza 2023.
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {invite.guests.map((guestInvite) => (
              <div key={guestInvite.name}>
                <div className="flex flex-row items-center mx-10 p-2 shadow-slate-400">
                  <div className="flex-1">{guestInvite.name}</div>
                  <div className="flex-2 flex flex-row h-10 gap-2">
                    <button
                      className={`px-3 py-2 border rounded-md  ${
                        guestInvite.coming
                          ? "border-indigo-500 border-4"
                          : "border-gray-300"
                      }}`}
                      onClick={() => {
                        handleComing(guestInvite, true);
                      }}
                    >
                      Dolazim
                    </button>
                    <button
                      className={`px-3 py-2 border rounded-md  ${
                        !guestInvite.coming
                          ? "border-indigo-500 border-4"
                          : "border-gray-300"
                      }}`}
                      onClick={() => {
                        handleComing(guestInvite, false);
                      }}
                    >
                      Ne dolazim
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-row items-center  mx-10 p-2 ml-20 shadow-slate-400">
              <p className="flex-1">Smještaj</p>
              <div className="flex-2 flex flex-row h-10 gap-2">
                <button className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                  Može
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                  Ne, hvala
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col m-auto items-center ">
            <h2
              className="font-sans mt-16"
              style={{
                fontWeight: "bold",
                letterSpacing: "3px",
              }}
            >
              KONTAKT
            </h2>
            <div className="flex items-center mt-4">
              <div className="flex flex-col items-center mr-4">
                <p style={{ fontWeight: "500", fontSize: "15px" }}>
                  FILIPA ČAGALJ
                </p>
                <p style={{ fontSize: "13px" }}>095 822 1955</p>
              </div>
              <hr className="border border-black-300 h-px flex-grow" />
              <div className="flex flex-col items-center ml-4">
                <p style={{ fontWeight: "500", fontSize: "15px" }}>
                  NIKOLA MATIĆ
                </p>
                <p style={{ fontSize: "13px" }}> 098 6422 35</p>
              </div>
            </div>
          </div>
          <h1 className="font-vibes m-auto" style={{ fontSize: "40px" }}>
            Veselimo se vašem dolasku!
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
