import { Link } from "react-router";
import AboutImageCarousel from "./AboutImageCarousel";

export default function AboutMe() {

  return (
    <>
      {/* <img src='./images/AboutMe/San Bernardino Mountains All Alone.png' 
        style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center', marginBottom: "30px"}}/> */}
      <div style={{marginLeft: "8%", marginRight: "8%", marginBottom: "20px"}}>
        <h4>Electronics and Test Technician</h4>
        <p style={{textAlign: "left", textIndent: "2em"}}>After high school I went to ITT Tech and earned an Associates Degree in 
          Electronics. I found a job as a Quality Control Techinican at Ampronix, inspecting component level
          repairs on medical grade monitors (CRT and LCD). I also performed chromaticity and
          luminosity calibrations on the required monitors and provided tech support for all monitors we serviced 
          and repaired. Then a previous coworker recommended me for a Mechanical Technician position at 
          N2 Imaging Systems, assembling the electronics of Night Vision Goggles. I worked in
          production for a few months, then moved into a prototype program handling various
          tasks such as prototype assembly, functional tests, performance tests and life testing. 
          The prototype program moved into production and I began to help the engineers complete 
          their tasks and projects. This is when I became inspired to learn software. Then the
          company had the need for a lot of environmental testing. They partnered with Leonardo DRS 
          to win a contract worth $367m for the production of Enhanced Night Vision Goggles (ENVG III).
          I learned how to run the environmental tests on our product such as thermal cycling, 
          vibration and immersion. Eventually I became the Lead Environmental Test Technician and led a team of 
          12 techs to successfully qualify the product and move it into
          production. Some tests such as Reliability Qualification Testing ran for several weeks and required 24/7 coverage. 
          Three shifts were implemented, and I provided on-call support for the night and weekend crews.
        </p>

        <h4>Test Engineer</h4>
        <p style={{textAlign: "left", textIndent: "2em"}}>
          Following the contract award, the company was sold to United Technologies and unfortunately performance declined over the next few years.
          I spent a total of 7 years at N2 Imaging Systems before I
          decided to move on to Hexagon Industries as a Calibration Technician. There I performed 
          calibrations and upgrades on Leica Laser Trackers. I did this for about eight months before 
          I was offered a Test Engineer position back at N2 Imaging Systems. The company was sold to 
           Cornerstone Capital Holdings and some of the old managers 
          were back in the picture to try and turn things around so I decided to return. There I authored and revised test procedures per MIL-STD-810G 
          using product knowledge and experience I gained over the years working as a technician. I also conducted 
          a number of offsite environmental tests such as Sand and Dust, Salt Fog and EMI.
          That lasted for about two years 
          until several complications led to the new owners closing the business. Soon after I found a job at Virgin Orbit 
          as a Propulsion Components Test Technician where I setup and validated a wide variety of air 
          and fluid systems to test rocket propulsion components such as regulators, check/relief valves, 
          flow meters/sensors, hoses and fittings, etc. I was there for about 7 months until I
          secured a Junior Software Engineer position at Maztech Industries.
        </p>
      </div>

      <div style={{marginLeft: "8%", marginRight: "8%", marginBottom: "20px"}}>
        <h4>Software Engineer</h4>
        <p style={{textAlign: "left", textIndent: "2em"}}>While working with engineers as a technician, I was motivated
          to go back to school and earn my bachelors degree in Software Engineering.
          It took me about 7 years to finish my degree, working full time during the day
          and taking 2-3 classes at night/the weekend. I also worked a second job on Sundays 
          and completed my degree debt free. I was able to obtain a Junior Software
          Engineer position a year and a half before graduating and worked there for about 3 years
          until I was layed off due to lack of work. During my time there I worked on a range of 
          projects such as C# desktop apps to facilitate the production of LRFs (Laser Range Finders),
          unit tests for a Xamarin/Maui mobile app, and small improvements/bug fixes for the display and control
          systems module of the LRF.
        </p>
      </div>

      <div style={{marginLeft: "8%", marginRight: "8%", marginBottom: "20px"}}>
        <h4>Hobbies</h4>
        <p style={{textAlign: "left", textIndent: "2em"}}>
          I've always enjoying tinkering with electronics and building hands-on projects.
          Recently, I've been playing with a STM32 development board and 
          continuing to improve my embedded programming skills. I gained
          experience with FreeRTOS while employed at Maztech Industries 
          and plan to continue developing my expertise with that operating system.
          A project I worked on recently was a USB controllable power strip. I used an
          Arduino and a relay to make a power strip that can be controlled by software.
          See that project{" "}
          <Link to="/usbPowerStrip">here.</Link>
        </p>
        <p style={{textAlign: "left", textIndent: "2em"}}>After completing my bachelors degree, 
          I was looking for something new and fun to get into which led me to
          paragliding. It's an incredible feeling taking off into the sky, flying over 
          mountain and coastline ridges. Its been a great way to discover new places and 
          meet new people. That winter, I decided to try skiing as well.  
          Developing my skills and confidence on the mountain has been very rewarding.
          Maybe one day I can combine the two sports.
          I used to surf when I was younger but these days I prefer stand up paddle boarding and 
          have taken some kite surfing lessons. 
          Now that I enjoy sports at both the beach and in the mountains, I feel like I'm really
          making the most of Southern California's incredible natural terrain and weather.
        </p>  
      </div>

      <div style={{marginLeft: "8%", marginRight: "8%", marginBottom: "50px"}}>
        <AboutImageCarousel />
      </div>
      
    </>
  )
}
