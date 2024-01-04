import Brother from "../brother/Brother";
import Myself from "../myself/Myself";
import Sisiter from "../sis/Sisiter";

const Dad = ({asset}) => {
  return (
    <div>
      <h2>Dad</h2>
      <section className="flex">
        <Myself asset={asset}></Myself>
        <Brother></Brother>
        <Sisiter></Sisiter>
      </section>
    </div>
  );
};

export default Dad;
