export default function HomePage() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Welcome!</h2>
            <img src='./images/MeAtComputer.jpg' width="100%"/>
          </div>
          <div className="col-6" style={{textAlign: "left", alignContent: "center"}}>
            <h3 style={{marginBottom: "40px"}}>Hey, I'm Jared Deaton</h3>
            <h4 style={{marginBottom: "0px"}}>C# Desktop App Developer <span style={{fontSize: "22px"}}>(3+ Years of Professional Experience)</span></h4>
            <h4 style={{margin: "20px 0px"}}>Full Stack Web Developer Using React and ASP.NET Core</h4>
            <h4>Embedded Hobbyist & Seasoned Electronics Technician</h4>
          </div>
        </div> 
      </div>
    </div>
  )
}