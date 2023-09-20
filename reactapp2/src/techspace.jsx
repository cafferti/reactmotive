import spaceimg from "../public/assets/technology/image-spaceport-portrait.jpg";

const spaceport = () => {
    return ( 
        <div className="techcon">
        <div className="techsec">
          <div className="desc">
            <p>THE TECHNOLOGIES...</p>
            <h1 className="h1">launch Vehicle</h1>
            <p>
            A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.
            </p>
          </div>
          <img src={spaceimg} width="400" alt="" />
        </div>
      </div>
     );
}
 
export default spaceport;