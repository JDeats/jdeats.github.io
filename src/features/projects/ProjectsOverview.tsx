import {useNavigate} from 'react-router';

export default function ProjectsOverview() {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1 style={{marginBottom: "30px"}}>Projects Overview</h1>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "20% 1fr", 
        gridTemplateRows: "repeat(5, auto)",
        gap: "20px" ,
        textAlign: "left",
        alignItems: "center"
      }}>
        <img src='./images/UsbPowerStrip/Logo.jpg' width="90%" style={{cursor: 'pointer',}} onClick={() => navigate('/usbPowerStrip')}/>
          <p style={{ margin: "0"}}>Power strip that can be controlled by software via USB. Made using an Arduino, 
            some electrical components and a 3D printer. Includes a C# library and desktop app.</p>

        <img src='./images/GlideLog/Logo.jpg' width="60%" style={{cursor: 'pointer',}} onClick={() => navigate('/glidelog')}/>
          <p style={{ margin: "0"}}>Cross-platform mobile app built with .NET Maui for logging paragliding 
            and hang gliding flights.</p>

        <img src='./images/Reactivities/Logo.jpg' width="100%" style={{cursor: 'pointer',}} onClick={() => navigate('/reactivities')}/>
          <p style={{ margin: 0 }}>Web app built with ASP.NET Core and React, hosted on Microsoft Azure. 
            Register an account and create events for others to view and follow.</p>
        
        <img src='./images/Simon/Logo.jpg' width="60%" style={{cursor: 'pointer',}} onClick={() => navigate('/simon')}/>
          <p style={{ margin: 0 }}>A recreation of the Simon memory game made by Milton Bradley using 
            HTML, CSS and Javascript. Play a game now!</p>

        <img src='./images/ExtraStockBooks/Logo.jpg' width="90%" style={{cursor: 'pointer',}} onClick={() => navigate('/extraStockBooks')}/>
          <p style={{ margin: 0 }}>Web app built with ASP.NET Core MVC and Razor Views for buying books 
            online with discounts on bulk purchases.</p>
      </div>   
    </div>
  )
}
