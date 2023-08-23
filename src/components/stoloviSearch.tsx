"use client";
import React, { useState } from "react";
import { stolovi } from "@/lib/utils";

function StoloviSearch() {
  const [search, setSearch] = useState("");

  const findStolIndex = (gost: string) => {
    return Object.values(stolovi).findIndex((stol) => {
      return stol.includes(gost);
    });
  };
  return (
    <div className="flex flex-col min-w-full">
      <input
        type="text"
        placeholder="Unesi svoje ime..."
        className="border-2 border-gray-400 rounded-md p-2 mb-2"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      <div className="grid grid-cols-2 gap-4">
        {Object.values(stolovi)
          .filter((stol) => {
            return stol.some((gost) => {
              return gost.toLowerCase().includes(search.toLowerCase());
            });
          })
          .map((stol, index) => {
            const stolIndex = findStolIndex(stol[0]);
            return (
              <div
                key={index}
                className="border-2 border-gray-400 rounded-md p-2"
              >
                <h1 className="text-center font-bold">Stol {stolIndex + 1}</h1>
                <ul>
                  {stol.map((gost, index) => {
                    return <li key={index}>{gost}</li>;
                  })}
                </ul>
              </div>
            );
          })}
      </div>
      {Object.values(stolovi).filter((stol) => {
        return stol.some((gost) => {
          return gost.toLowerCase().includes(search.toLowerCase());
        });
      }).length === 0 && (
        <p className="text-center text-gray-500">
          Ako smo vas slučajno zaboravili, ispričavamo se, priđite nam i mi ćemo
          vam naći mjesto!
        </p>
      )}
    </div>
  );
}

export default StoloviSearch;
