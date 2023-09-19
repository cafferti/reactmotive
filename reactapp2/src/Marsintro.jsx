import marslogo from "../public/assets/destination/image-mars.png";

const marsintro = () => {
  return (
    <div>
      <h1  style={{opacity:"0.8"}} className="marslogo"> <span> 01 </span>Pick your destination</h1>
      <img src={marslogo} alt="" width={"60%"} />
    </div>
  );
};

export default marsintro;
