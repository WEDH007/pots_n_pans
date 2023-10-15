import { type AppType } from "next/dist/shared/lib/utils";
import FallingVeggies from "~/components/FallingVeggies";
import Link from "next/link";
import Image from "next/image";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <div className=" delay-80 fixed right-10 top-10 transform-gpu rounded-full bg-white px-0  py-1 drop-shadow-lg transition ease-in-out hover:-translate-y-2 hover:scale-105">
          <Image
            src="./images/favicon.svg"
            alt="logo"
            width={60}
            height={60}
          ></Image>
        </div>
      </Link>
      <Component {...pageProps} />
      <FallingVeggies></FallingVeggies>
      <Link className="absolute bottom-20 -z-[10] " href="/">
        <h1 className=" font-indie text-3xl">Pots n&apos; Pans</h1>
      </Link>
      <h2 className="absolute bottom-10 -z-[10] font-indie text-xl ">
        Made with {"\u2764"} by Jun, Gabriel, Alyssa, and Andrea
      </h2>
    </div>
  );
};

export default MyApp;
