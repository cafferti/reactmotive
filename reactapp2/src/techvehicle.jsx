import vehicleimg from "../public/assets/technology/image-launch-vehicle-portrait.jpg";

const techvehicle = () => {
  return (
    <div className="techcon">
      <div className="techsec">
        <div className="desc">
          <p>THE TECHNOLOGIES...</p>
          <h1 className="h1">launch Vehicle</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            eum perferendis aspernatur esse repellendus illo nostrum quo culpa
            exercitationem sed quasi, atque, at itaque dolor repellat
            necessitatibus fugiat numquam quod.
          </p>
        </div>
        <img src={vehicleimg} width="400" alt="" />
      </div>
    </div>
  );
};

export default techvehicle;
