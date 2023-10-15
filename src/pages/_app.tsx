import { type AppType } from "next/dist/shared/lib/utils";
import FallingVeggies from "~/components/FallingVeggies";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Component {...pageProps} />
      <FallingVeggies></FallingVeggies>
      <h1 className="absolute bottom-20 font-indie text-3xl">
        Pots n&apos; Pans
      </h1>
      <h2 className="absolute bottom-10 font-indie text-xl ">
        Made with {"\u2764"} by Jun, Gabriel, Alyssa, and Andrea
      </h2>
    </div>
  );
};

export default MyApp;
