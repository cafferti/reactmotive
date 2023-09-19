import titanlogo from "../public/assets/destination/image-titan.png";

const titanintro = () => {
  return (
    <div>
      <h1 style={{opacity:"0.8"}}  className="marslogo"> <span>01 </span> Pick your destination</h1>
      <img src={titanlogo} alt="" width={"60%"} />
    </div>
  );
};

export default titanintro;
