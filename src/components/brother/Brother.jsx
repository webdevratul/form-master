import { useContext } from "react";
import { MoneyContext } from "../grandpa/Grandpa";

const Brother = () => {
  const [Money] = useContext(MoneyContext);
  return (
    <div>
      <h2>Brother</h2>
      <p>Gradpa: {Money}</p>
    </div>
  );
};

export default Brother;
