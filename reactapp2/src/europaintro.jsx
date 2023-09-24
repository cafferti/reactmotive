import europalogo from "../public/assets/destination/image-europa.png";

const europaintro = () => {
  return (
    <div>
      <h1 style={{opacity:"0.8"}} className="marslogo"> <span>01</span>Pick your destination</h1>
      <img src={europalogo} alt="" width={"60%"} />
    </div>
  );
};

export default europaintro;
