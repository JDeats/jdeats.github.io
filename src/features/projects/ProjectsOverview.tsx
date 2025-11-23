import { NavLink } from "react-router";

export default function ProjectsOverview() {
  return (
    <>
      <h1 style={{marginBottom: "30px"}}>Projects Overview</h1>

      <div style={{ textAlign: "left", display:"flex", gap:"5px"}}>
        <NavLink to='/reactivities'>Reactivities</NavLink>
        <p>A web app built with ASP.NET Core and React, hosted on Microsoft Azure. Register an account and create events for others to view and follow.</p>
      </div>

      <div style={{ textAlign: "left", display:"flex", gap:"5px"}}>
        <NavLink to='/glidelog'>Glide Log</NavLink>
        <p>A cross-platform mobile app built with .NET Maui for logging paragliding and hang gliding flights.</p>
      </div>
    </>
  )
}