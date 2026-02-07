export default function Reactivities() {
  return (
    <>
        <img src='./images/Reactivities/HomePageReduced.jpg' style={{width: "75%", marginBottom: "10px"}}/>

        <p className="project-section-header" style={{marginBottom: "10px"}}>Description: <span>A web app built with ASP.NET Core and React, hosted on Microsoft Azure. 
            This app was made while completing the Udemy course: "The complete guide to building an app from start to finish using .Net 9.0, React 19 and React Query". Completed on Nov. 7, 2025.</span>
        </p>
        <div style={{marginBottom: "10px"}}></div>
        <p className="leftAlign">
          Register an account and create events for others to view and follow. Chat live with other users about the event. Follow other people and view their events. 
          Upload photos to your profile. Filter events by date, whether you're attending and if you're hosting the event. The events list is populated as you continue to scroll down.
        </p>

        <div style={{textAlign: "left", marginTop: "0px", marginBottom: "5px"}}>
            <span>
                <a href="https://reactivities-jdeats.azurewebsites.net/" target="_blank" rel="noopener noreferrer" title="Reactivities" style={{ marginRight: "10px" }}>Link To Live Website</a>
            </span>
            <span>
                You're welcome to make a profile, upload photos, create/join events and add comments. The site becomes inactive after a period of time without traffic so 
                after clicking the link please wait up to a minute for the server to start up. Try refreshing the page a few times.
            </span>
        </div>

        <div style={{ textAlign: "left", marginBottom: "10px"}}>
            <a href="https://github.com/JDeats/Reactivities" target="_blank" rel="noopener noreferrer" title="Reactivities">Link To Github</a>
        </div>

        <p className="project-section-header">Core Concepts Learned:</p>
        <ul style={{marginLeft: "1em", marginTop: "-15px"}}>
            <li>Creating a multi-project solution containing an ASP.NET Core project and a React app using the DotNet CLI and Vite CLI</li>
            <li>Clean Architecture and the CQRS + Mediator pattern</li>
            <li>Using React with Typescript</li>
            <li>Material UI to design a professional looking user interface</li>
            <li>SignalR to enable real time web communication to a chat feature in the app</li>
            <li>React Router to handle navigation between views</li>
            <li>MobX as a state management library</li>
            <li>Paging, Sorting and Filtering</li>
            <li>Using Entity Framework Core as the Object Relational Mapper</li>
            <li>AutoMapper in ASP.NET Core for LINQ mapping to Data Transfer Objects</li>
            <li>Setting up and configuring ASP.NET Core Identity for authentication</li>
            <li>Adding a Client side login and register function to a React application</li>
            <li>Creating a user profile page</li>
            <li>Photo upload widget with a Dropzone and a Cropper to resize images</li>
            <li>Publishing the application to Azure with a SQL database</li>
        </ul> 

        <div>
             <img src='./images/Reactivities/ActivityList.jpg' style={{width: "48%", marginRight: "10px"}}/>
             <img src='./images/Reactivities/ActivityDetails.jpg' style={{width: "48%"}}/>
        </div>
    </>
  )
}
