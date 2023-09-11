const carouselitem = ({ crewmember }) => {
  return (
    <div className="crewmember">
      <div className="crewtext">
        <h2>{crewmember.Role}</h2>
        <h1>{crewmember.Name}</h1>
        <p>{crewmember.About}</p>
      </div>
      <div className="crewimg">
      <img src={crewmember.img} alt="" width={350}  />

      </div>
    </div>
  );
};

export default carouselitem;
