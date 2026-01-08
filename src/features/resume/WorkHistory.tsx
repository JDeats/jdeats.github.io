export default function WorkHistory() {
  return (
    <div>
      <p className="resume-section-header">WORK EXPERIENCE:</p>
      <div className="indented">
        <div className="spread-content">
            <span>Maztech Industries - Irvine, CA</span>
            <span>Jan 2024 - July 2025</span>
        </div>
        <p className="resume-job-title">Software Engineer</p>
        <ul style={{marginBottom: "5px"}}>
          <li>Designed and maintained Microsoft WPF apps to align the infrared and visible lasers of the 
              X4 Laser Range Finder (X4-LRF) and calibrate their power levels during production.</li>
          <li>Used Microsoft Entity Framework and RESTful APIs to store and manage data in a SQL Server.</li>
          <li>Added features and resolved issues in the embedded RTOS for the OLED display and 
              control systems module of the X4-LRF using C.</li>
          <li>Developed three Microsoft WPF apps to showcase potential hardware and 
              technology that could be fabricated for prospective customers.</li>
        </ul>

        <div className="spread-content">
            <span style={{fontWeight: "bold", marginBottom: "16px"}}>Entry Level Software Engineer</span>
            <span>Jun 2022 - Jan 2024</span>
        </div>
        <ul>
          <li>Collaborated with Teledyne FLIR engineers to design and implement Microsoft WPF apps to test the thermal performance 
              and reliability of advanced Thermal Weapon Sights for the U.S. Army's FWS-I program using C# and Python.</li>
          <li>Created mock hardware and unit tests for the Maztech Companion mobile app built on .NET MAUI.</li>
          <li>Developed a WPF app to test all functions and validate serial data-packet responses from remote keypads 
              for both the X4-LRF and X4 Fire Control System (X4-FCS).</li>
        </ul>

        <div className="spread-content">
            <span>Virgin Orbit - Long Beach, CA</span>
            <span>Nov 2021 - May 2022</span>
        </div>
        <p className="resume-job-title">Propulsion Components Test Technician</p>
        <ul>
          <li>Setup and validated a wide variety of air and fluid systems to test rocket propulsion components such as 
              regulators, check/relief valves, flow meters/sensors, RTDs, hoses and fittings, etc.</li>
          <li>Maintained a high level of safety as components were tested up to 10000 psi.</li>
          <li>Performed environmental tests such as thermal cycling with LN2 running through the unit under test.</li>
          <li>Monitored the unit's temperature using National Instruments Flex Logger via thermocouples.</li>
        </ul>

        <div className="spread-content">
            <span>N2 Imaging Systems - Irvine, CA</span>
            <span>Jul 2019 - Sept 2021</span>
        </div>
        <p className="resume-job-title">Test Engineer</p>
        <ul style={{marginBottom: "5px"}}>
          <li>Authored, revised and maintained production test procedures in compliance with MIL-STD-810G for advanced Hybrid Thermal/Night Vision Optics.</li>
          <li>Setup test stations and performed validation testing to verify functionality and uniformity.</li>
          <li>Supported the test lab to ensure anomalies were handled in an appropriate and timely manner.</li>
          <li>Performed Sand and Dust, Salt Fog and Electromagnetic Interference tests at an offsite test lab.</li>
        </ul>

        <div className="spread-content">
            <span style={{fontWeight: "bold", marginBottom: "16px"}}>Lead Environmental Test Technician</span>
            <span>Jan 2014 - Nov 2018</span>
        </div>
        <ul>
          <li>Led a team of 12 test technicians to successfully qualify hybrid thermal/night vision goggles for the 
              U.S. Army's ENVGIII program, maintaining 24/7 coverage across three shifts.</li>
          <li>Trained technicians on environmental tests such as thermal cycling, vibration, immersion, etc.</li>
          <li>Maintained test equipment, tracked calibration dates and ensured test stations were operational.</li>
          <li>Troubleshot failures while recording a detailed log of issues observed and actions taken.</li>
        </ul>
      </div>
    </div>
  )
}