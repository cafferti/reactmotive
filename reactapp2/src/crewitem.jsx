const Carouselitem = ({ crewmember }) => {
  return (
    <div>
      <h2>{crewmember.Role}</h2>
      <h1>{crewmember.Name}</h1>
      <p>{crewmember.About}</p>
      <img src={crewmember.img} alt="" width={350} />
    </div>
  );
};

export default Carouselitem;
