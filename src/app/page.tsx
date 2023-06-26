import Image from 'next/image'
import { Cormorant_Garamond } from "next/font/google";

const playfairFont = Cormorant_Garamond({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={
        "flex min-h-screen flex-col relative" + " " + playfairFont.className
      }
    >
      <div className="absolute top-0 right-0">
        <Image
          src="/images/flowercorner.png"
          alt="hero"
          width={300}
          height={270}
        />
      </div>
      <div className="flex-col mt-64">
        <h1 className="text-5xl text-center">FILIPA</h1>
        <h1 className="text-5xl text-center">&</h1>
        <h1 className="text-5xl text-center">NIKOLA</h1>
      </div>
      <h1 className="text-2xl text-center bold mt-20">
        POZIVAMO VAS NA NAŠE VJENČANJE
      </h1>
      <div className="flex-col mt-20 relative">
        <h1 className="text-3xl text-center">PETAK</h1>
        <h1 className="text-7xl text-center -pt-4">25</h1>
        <h1 className="text-2xl text-center">KOLOVOZA</h1>
        <h1 className="text-2xl text-center">2023</h1>
        <div className="absolute -top-20 -left-32 rotate-45 sm:mt-4">
          <Image
            src="/images/longFlower.png"
            alt="hero"
            width={300}
            height={270}
            unoptimized
          />
        </div>
      </div>
    </main>
  );
}
