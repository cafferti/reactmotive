const marsintro = () => {
  return (
    <div className="marsintrocon">
      <h1>MARS</h1>
      <p>
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </p>
      <section className="distancetime" >
         <div className="distance">
         Avg. distance <br />
        <span>225 mil. km</span>  

         </div>
         <div className="time">
         Est. travel time <br />
         <span> 9 months</span>
         </div>
      </section>
    </div>
  );
};

export default marsintro;
