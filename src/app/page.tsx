import Image from "next/image";
import { Sacramento, Open_Sans } from "next/font/google";

const greatVibesFont = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

const openSansFont = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-white w-screen min-h-screen flex ">
      <div
        className={
          "flex flex-col h-100 mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-slate-400"
        }
        style={{
          width: "420px",
          marginTop: "40px",
          marginBottom: "40px",
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
          <h1 className={greatVibesFont.className}>Filipa</h1>
          <p
            style={{ fontSize: "20px", marginLeft: "40px", marginTop: "-10px" }}
          >
            i
          </p>
          <h1
            className={greatVibesFont.className}
            style={{ marginTop: "-40px" }}
          >
            Nikola
          </h1>
        </div>
        <div className=" w-100 flex flex-col justify-center items-center gap-6">
          <h1
            className={openSansFont.className}
            style={{ fontWeight: "bold", letterSpacing: "3px" }}
          >
            DRAGI NAŠI,
          </h1>
          <p
            className={openSansFont.className}
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
            className={openSansFont.className}
            style={{
              fontWeight: "700",
              letterSpacing: "0.15em",
              fontSize: "1.21em",
            }}
          >
            PETAK, 25.08.2023.
          </h1>
        </div>

        <div className="w-100 flex flex-col justify-center items-start gap-6 ml-10">
          <div className="flex w-full">
            <p
              style={{
                fontWeight: "600",
                letterSpacing: "2px",
                marginBottom: "0.26em",
                fontSize: "1.07em",
              }}
              className="mr-6"
            >
              16:30
            </p>
            <div className="flex flex-col">
              <p
                style={{
                  fontWeight: "600",
                  letterSpacing: "2px",
                  marginBottom: "0.26em",
                  fontSize: "1.07em",
                }}
              >
                TRATAMENAT ZRNO SOLI
              </p>
              <p
                style={{
                  fontWeight: "300",
                  letterSpacing: "2px",
                  fontSize: "12px",
                }}
              >
                UVALA BALUNI 8, 21000 SPLIT
              </p>
            </div>
          </div>
          <div className="flex w-full">
            <p
              style={{
                fontWeight: "600",
                letterSpacing: "2px",
                marginBottom: "0.26em",
                fontSize: "1.07em",
              }}
              className="mr-6"
            >
              19:00
            </p>
            <div className="flex flex-col">
              <p
                style={{
                  fontWeight: "600",
                  letterSpacing: "2px",
                  marginBottom: "0.26em",
                  fontSize: "1.07em",
                }}
              >
                OBRED VJENČANJA
              </p>
              <p
                style={{
                  fontWeight: "300",
                  letterSpacing: "2px",
                  fontSize: "12px",
                }}
              >
                CRKVA SV.STJEPANA, SUSTIPAN
              </p>
            </div>
          </div>
          <div className="flex w-full">
            <p
              style={{
                fontWeight: "600",
                letterSpacing: "2px",
                marginBottom: "0.26em",
                fontSize: "1.07em",
              }}
              className="mr-6"
            >
              20:30
            </p>
            <div className="flex flex-col">
              <p
                style={{
                  fontWeight: "600",
                  letterSpacing: "2px",
                  marginBottom: "0.26em",
                  fontSize: "1.07em",
                }}
              >
                PIĆE DOBRODOŠLICE
              </p>
              <p
                style={{
                  fontWeight: "300",
                  letterSpacing: "2px",
                  fontSize: "12px",
                }}
              >
                RESTORAN POLJUD
              </p>
            </div>
          </div>
          <div className="flex w-full">
            <p
              style={{
                fontWeight: "600",
                letterSpacing: "2px",
                marginBottom: "0.26em",
                fontSize: "1.07em",
              }}
              className="mr-6"
            >
              21:00
            </p>
            <div className="flex flex-col">
              <p
                style={{
                  fontWeight: "600",
                  letterSpacing: "2px",
                  marginBottom: "0.26em",
                  fontSize: "1.07em",
                }}
              >
                VEČERA, PJESMA I PLES
              </p>
              <p
                style={{
                  fontWeight: "300",
                  letterSpacing: "2px",
                  fontSize: "12px",
                }}
              >
                RESTORAN POLJUD
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/flower_one.png"
              alt="hero"
              width={600}
              height={600}
            />
          </div>
          <div
            className="w-full flex flex-col  justify-center mb-0 m-10"
            style={{ marginTop: "-150px" }}
          >
            <p
              className={openSansFont.className}
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
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Upišite imena tko dolazi"
              className="px-3 py-2 ml-3 border border-gray-300 rounded-md w-5/6 focus:outline-none focus:border-indigo-500"
              style={{ backgroundColor: "#FDFCF8" }}
            />
            <textarea
              placeholder="Opcionalno: Vaša poruka, pitanje, info o posebnoj prehrani, želja ili pozdrav :)"
              className="px-3 py-2 ml-3 border border-gray-300 rounded-md w-5/6 focus:outline-none focus:border-indigo-500"
              rows={3}
              style={{ backgroundColor: "#FDFCF8" }}
            />
            <div className="flex items-center mb-4 mt-4 ml-4">
              <p className="mr-2">Smještaj</p>
              <div className="ml-auto flex w-3/5">
                <button className=" px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                  Može
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                  Ne, hvala
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-5 ml-10">
            <h2
              className={openSansFont.className}
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
          <div>
            <h1
              className={greatVibesFont.className}
              style={{ fontSize: "40px" }}
            >
              Veselimo se vašem dolasku!
            </h1>
          </div>
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
