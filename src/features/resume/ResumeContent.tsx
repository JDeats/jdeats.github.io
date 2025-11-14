import { Container } from "react-bootstrap";
import Education from "./Education";
import Objective from "./Objective";
import ProfessionalSkills from "./ProfessionalSkills";
import ResumeHeader from "./ResumeHeader";
import TechnicalSkills from "./TechnicalSkills";
import WorkHistory from "./WorkHistory";

export default function ResumeContent() {
  return (
    <Container style={{maxWidth: "900px" }}>
        <ResumeHeader />
        <Objective />
        <WorkHistory />
        <TechnicalSkills />
        <ProfessionalSkills />
        <Education />
    </Container>
  )
}