import capsuleimg from "../public/assets/technology/image-space-capsule-portrait.jpg";

const capsule = () => {
  return (
    <div className="techcon">
      <div className="techsec">
        <div className="desc">
          <p>THE TECHNOLOGIES...</p>
          <h1 className="h1"> Space capsule</h1>
          <p>
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </div>
        <img src={capsuleimg} width="400" alt="" />
      </div>
    </div>
  );
};

export default capsule;
