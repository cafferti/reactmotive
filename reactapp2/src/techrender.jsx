import Techvehicle from "./techvehicle";

const techrender = () => {
  return (
    <div className="techrender">
        <div className="technav">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
      <div className="techdetails">
        <h1>
          <span>03</span> spacelaunch 101
        </h1>
        <Techvehicle />
      </div>
    </div>
  );
};

export default techrender;
