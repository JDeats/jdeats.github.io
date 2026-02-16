import { NavLink } from "react-router";

export default function ProjectsOverview() {
  return (
    <div>
      <h1 style={{marginBottom: "30px"}}>Projects Overview</h1>
      <div style={{margin: "0px 20px"}}>

        <div style={{ textAlign: "left", display:"flex", gap:"5px"}}>
          <NavLink to='/reactivities'>Reactivities</NavLink>
          <p>A web app built with ASP.NET Core and React, hosted on Microsoft Azure. 
            Register an account and create events for others to view and follow.</p>
        </div>

        <div style={{ textAlign: "left", display:"flex", gap:"5px"}}>
          <NavLink to='/glidelog'>Glide Log</NavLink>
          <p>A cross-platform mobile app built with .NET Maui for logging paragliding 
            and hang gliding flights.</p>
        </div>

        <div style={{ textAlign: "left", display:"flex", gap:"5px"}}>
          <NavLink to='/simon'>Simon</NavLink>
          <p>A recreation of the Simon memory game made by Milton Bradley using 
            HTML, CSS and Javascript.</p>
        </div>

        <div style={{ textAlign: "left", display:"flex", gap:"5px"}}>
          <NavLink to='/extraStockBooks'>Extra-Stock Books</NavLink>
          <p>A web app built with ASP.NET Core MVC and Razor Views for buying books 
            online with discounts on bulk purchases.</p>
        </div>

        <div style={{ textAlign: "left", display:"flex", gap:"5px"}}>
          <NavLink to='/usbPowerStrip'>USB Power Strip</NavLink>
          <p>A power strip that can be controlled by software via USB. Made using an Arduino, 
            some electrical components and a 3D printer. Includes a C# library and desktop app.</p>
        </div>

      </div>   
    </div>
  )
}
