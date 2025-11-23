export default function GlideLog() {
  return (
    <>
        <h2>Glide Log</h2>

        <p className="project-section-header" style={{ marginTop: "10px", marginBottom: "10px"}}>Description: <span>A cross-platform mobile app built with .NET Maui for logging paragliding and hang gliding flights.</span>
        </p>
        <div style={{marginBottom: "10px"}}></div>
        <p className="leftAlign">
          Simple and fast flight logging. Flights are stored locally using SQLite and can be imported/exported as a .csv file for backup. Platform specific code was implemented for exporting the log using iOS or Android. There are two main tabs, the Flight List tab and Totals tab.
          The Flight List is for viewing all your logged flights and lets you add, update and delete flights. The Totals tab provides you with the total amount of flights and hours for every month, site and glider depending on the option selected.
        </p>

        <div style={{ textAlign: "left", marginBottom: "10px"}}>
            <a href="https://github.com/JDeats/GlideLog" target="_blank" rel="noopener noreferrer" title="GlideLog">Link To Github</a>
        </div>

        <p className="project-section-header">Core Concepts Learned:</p>
        <ul style={{marginLeft: "1em"}}>
            <li>Creating a cross-platform mobile app using .NET Maui</li>
            <li>MVVM design pattern</li>
            <li>Writing platform specific code for exporting a .csv file</li>
            <li>Local database using SQLite</li>
            <li>Flyout menu for updating the Flight List</li>
            <li>Tab bar for navigating between views</li>
            <li>Pop-up window for adding new sites and gliders</li>
        </ul> 

        <p className="leftAlign">
          Screenshots of my paragliding logs shown below. I started paragliding in March 2024.
        </p>

        <img src='./images/GlideLog/FlyoutMenu.PNG' style={{width: "24%", marginRight: "2px"}}/>
        <img src='./images/GlideLog/FlightList.PNG' style={{width: "24%", marginRight: "2px"}}/>
        <img src='./images/GlideLog/AddFlight.PNG' style={{width: "24%", marginRight: "2px"}}/>
        <img src='./images/GlideLog/EditFlight.PNG' style={{width: "24%", marginRight: "2px"}}/> 

        <div style={{marginTop: "2px"}}>
            <img src='./images/GlideLog/TotalByMonth.PNG' style={{width: "25%", marginRight: "2px"}}/>
            <img src='./images/GlideLog/TotalBySite.PNG' style={{width: "25%", marginRight: "2px"}}/>
            <img src='./images/GlideLog/TotalByGlider.PNG' style={{width: "25%", marginRight: "2px"}}/>
        </div>
        
        
    </>
  )
}