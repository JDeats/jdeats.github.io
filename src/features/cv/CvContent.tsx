import { Container } from "react-bootstrap"
import CvHeader from "./CvHeader"
import CvBody from "./CvBody"

export default function CvContent() {
  return (
    <Container style={{maxWidth: "1000px" }}>
        <CvHeader/>
        <CvBody />
    </Container>
  )
}  
