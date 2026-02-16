import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ResumeContent from "../../features/resume/ResumeContent";
import Reactivities from "../../features/projects/Reactivities";
import ProjectsOverview from "../../features/projects/ProjectsOverview";
import GlideLog from "../../features/projects/GlideLog";
import Simon from "../../features/projects/Simon";
import ExtraStockBooks from "../../features/projects/ExtraStockBooks";
import AboutMe from "../../features/about/AboutMe";
import UsbPowerStrip from "../../features/projects/UsbPowerStrip";

export const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App />,
    children: [
        {path: '', element: <HomePage />},
        {path: 'resume', element: <ResumeContent />},
        {path: 'reactivities', element: <Reactivities />},
        {path: 'projectsOverview', element: <ProjectsOverview />},
        {path: 'glidelog', element: <GlideLog />},
        {path: 'simon', element: <Simon />},
        {path: 'extraStockBooks', element: <ExtraStockBooks />},
        {path: 'about', element: <AboutMe/>},
        {path: 'usbPowerStrip', element: <UsbPowerStrip/>}
    ]
  }
]);
