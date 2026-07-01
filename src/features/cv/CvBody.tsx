import CvContact from "./CvContact";
import CvEducation from "./CvEducation";
import CvInterests from "./CvInterests";
import CvObjective from "./CvObjective";
import CvSkills from "./CvSkills";
import CvWorkHistory from "./CvWorkHistory";

export default function CvBody() {
  return (
    <div style={{display: "flex", marginTop: "2em"}}>
        <div style={{flex: 4, borderRight: "1px solid #000000"}}>
            <CvContact />
            <CvEducation />
            <CvInterests />
            <CvSkills />
        </div>
        <div style={{flex: 8}}>
            <CvObjective />
            <CvWorkHistory />
        </div>
    </div>
  )
}
