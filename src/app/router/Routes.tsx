import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ResumeContent from "../../features/resume/ResumeContent";
import Reactivities from "../../features/projects/Reactivities";
import ProjectsOverview from "../../features/projects/ProjectsOverview";
import GlideLog from "../../features/projects/GlideLog";

export const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App />,
    children: [
        {path: '', element: <HomePage />},
        {path: 'resume', element: <ResumeContent />},
        {path: 'reactivities', element: <Reactivities />},
        {path: 'projectsOverview', element: <ProjectsOverview />},
        {path: 'glidelog', element: <GlideLog />}
    ]
  }
]);
