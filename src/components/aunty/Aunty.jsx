import { useContext } from "react";
import Cousin from "../cousin/Cousin";
import { MoneyContext } from "../grandpa/Grandpa";

const Aunty = () => {
  const [Money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Jony sing"}></Cousin>
        <Cousin name={"Mia Kholifa"}></Cousin>
      </section>
      <p>Money: {Money} </p>
      <button onClick={() => setMoney(Money + 1000)}>Add 1000 tk</button>
    </div>
  );
};

export default Aunty;
