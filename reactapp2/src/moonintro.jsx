import moonlogo from "../public/assets/destination/image-moon.png";

const moonintro = () => {
  return (
    <div>
      <h1 className="marslogo"> 01 Pick your destination</h1>
      <img src={moonlogo} alt="" width={"60%"} />
    </div>
  );
};

export default moonintro;
