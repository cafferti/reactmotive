import vehicleimg from "../public/assets/technology/image-launch-vehicle-portrait.jpg";

const techvehicle = () => {
  return (
    <div className="techcon">
      <div className="techsec">
        <div className="desc">
          <p>THE TECHNOLOGIES...</p>
          <h1 className="h1">launch Vehicle</h1>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
        <img src={vehicleimg} width="400" alt="" />
      </div>
    </div>
  );
};

export default techvehicle;
