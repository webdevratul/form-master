import { createContext, useState } from "react";
import Aunty from "../aunty/Aunty";
import Dad from "../dad/Dad";
import Uncle from "../uncle/Uncle";
import "./Grapa.css";

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const [Money, setMoney] = useState(1000);
  const asset = "Diamond";

  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Net Money: {Money} </p>
      <MoneyContext.Provider value={[Money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/* 

1. create a context and export
2. Add provider for the context with a value. value could be anything 
3. ueContext to access value in the context API


*/
