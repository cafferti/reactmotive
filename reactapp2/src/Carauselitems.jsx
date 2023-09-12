const Carouselitem = ({ crewmember }) => {
    const itemStyle = {
    //   display: 'inline-block', // Set the display to inline-block
      margin: '10px', // Optional margin between items
      verticalAlign: 'top', // Align items vertically at the top (adjust as needed)
      width: '100%', // Set a fixed width for each item (adjust as needed)
    };
  
    return (
      <div className="crewmember" style={itemStyle}>
        <div className="crewtext">
          <h2>{crewmember.Role}</h2>
          <h1>{crewmember.Name}</h1>
          <p>{crewmember.About}</p>
        </div>
        <div className="crewimg">
          <img src={crewmember.img} alt="" width={350} />
        </div>
      </div>
    );
  };
  
  export default Carouselitem;
  