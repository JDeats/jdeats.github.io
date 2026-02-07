import {useNavigate} from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">

        <div className="row">
          <div className="col-6">
            <h2>Hello!</h2>
            <img src='./images/HomePage/MeAtComputer.jpg' width="100%" style={{borderRadius: '50px'}} />
          </div>
          <div className="col-6" style={{textAlign: "left", alignContent: "center"}}>
            <h3 style={{marginBottom: "40px"}}>I'm Jared Deaton</h3>
            <h4 style={{marginBottom: "0px"}}>C# Desktop App Developer <span style={{fontSize: "22px"}}>(3+ Years of Professional Experience)</span></h4>
            <h4 style={{margin: "20px 0px"}}>Full Stack Web Developer Using React and ASP.NET Core</h4>
            <h4>Embedded Hobbyist & Accomplished Electronics Technician</h4>
          </div>
        </div>

        <div className="row" style={{marginTop: "50px"}}>
          <div className="col-4" >
            <img src='./images/HomePage/Resume.jpg' width="80%" style={{cursor: 'pointer', borderRadius: '30px', objectFit: "cover"}} onClick={() => navigate('/resume')}/>
            <h5 style={{marginTop: '10px'}}>Have a Look at My Resume</h5>
          </div>
          <div className="col-4">
            <img src='./images/GlideLog/FlightList.PNG' width="48%" style={{cursor: 'pointer', borderRadius: '10px', objectFit: "cover"}} onClick={() => navigate('/projectsOverview')}/>
            <h5 style={{marginTop: '10px'}}>Browse a Few Projects I've Worked On</h5>
          </div>
          <div className="col-4" style={{ objectFit: "cover", display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
            <img src='./images/HomePage/Flying.jpg' width="100%" style={{cursor: 'pointer', borderRadius: '50px'}} onClick={() => navigate('/about')}/>
            <h5 style={{marginTop: '10px'}}>More About Me</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
