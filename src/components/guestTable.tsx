"use client";
import { Guest, Invite } from "@/types/types";
import React, { useState } from "react";
import Image from "next/image";

function GuestTable({
  dummyInvitee,
  timeTable,
}: {
  dummyInvitee: Invite;
  timeTable: { time: string; event: string; location: string }[];
}) {
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
            <p style={{ fontWeight: "500", fontSize: "15px" }}>FILIPA ČAGALJ</p>
            <p style={{ fontSize: "13px" }}>095 822 1955</p>
          </div>
          <hr className="border border-black-300 h-px flex-grow" />
          <div className="flex flex-col items-center ml-4">
            <p style={{ fontWeight: "500", fontSize: "15px" }}>NIKOLA MATIĆ</p>
            <p style={{ fontSize: "13px" }}> 098 6422 35</p>
          </div>
        </div>
      </div>
      <h1 className="font-vibes m-auto" style={{ fontSize: "40px" }}>
        Veselimo se vašem dolasku!
      </h1>
    </div>
  );
}

export default GuestTable;
