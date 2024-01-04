import Friend from "../friend/Friend";
import Special from "../special/Special";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>
        {asset && <Special asset={asset}></Special>}
        {name === "Mia Kholifa" && <Friend></Friend>}
      </section>
    </div>
  );
};

export default Cousin;
