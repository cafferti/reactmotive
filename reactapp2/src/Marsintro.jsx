import marslogo from "../public/assets/destination/image-mars.png";

const marsintro = () => {
  return (
    <div>
      <h1 className="marslogo"> 01 Pick your destination</h1>
      <img src={marslogo} alt="" width={"60%"} />
    </div>
  );
};

export default marsintro;
