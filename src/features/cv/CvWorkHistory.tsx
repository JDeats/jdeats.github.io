export default function CvWorkHistory() {
  return (
    <>
      <h5>Work History</h5>
      <div style={{ marginLeft: "1em" }}>
        <div style={{ fontStyle: "italic", fontSize: "18px", textAlign: "left" }}>Maztech Industries - Irvine, CA</div>
        <div className="spread-content">
          <span className="resume-job-title">Software Engineer</span>
          <span>Jan 2024 - July 2025</span>
        </div>
        <ul style={{ marginBottom: "5px" }}>
          <li>
            Designed and maintained production test software (WPF, C#) for the laser alignment and power calibration of
            the X4 Laser Range Finder (X4-LRF).
          </li>
          <li>Developed RESTful APIs to manage production data in a SQL Server using Entity Framework.</li>
          <li>
            Added features and resolved issues in the embedded RTOS for the OLED display and control systems module of
            the X4-LRF using C.
          </li>
          <li>
            Created three Microsoft WPF apps to showcase potential hardware and technology that could be fabricated for
            prospective customers.
          </li>
        </ul>

        <div className="spread-content">
          <span style={{ fontWeight: "bold" }}>Entry-Level Software Engineer</span>
          <span>Jun 2022 - Jan 2024</span>
        </div>
        <ul>
          <li>
            Collaborated with Teledyne FLIR engineers to design and implement Microsoft WPF apps to test the thermal
            performance and reliability of advanced Thermal Weapon Sights for the U.S. Army's FWS-I program using C# and
            Python.
          </li>
          <li>Created mock hardware and unit tests for the Maztech Companion mobile app built on .NET MAUI.</li>
          <li>
            Developed a WPF app to test all functions and validate serial data-packet responses from remote keypads for
            both the X4-LRF and X4 Fire Control System (X4-FCS).
          </li>
        </ul>

        <div style={{ fontStyle: "italic", fontSize: "18px", textAlign: "left" }}>Virgin Orbit - Long Beach, CA</div>
        <div className="spread-content">
          <span className="resume-job-title">Propulsion Components Test Technician</span>
          <span>Nov 2021 - May 2022</span>
        </div>
        <ul>
          <li>
            Setup and validated a wide variety of air and fluid systems to test rocket propulsion components such as
            regulators, check/relief valves, flow meters/sensors, RTDs, pressure transducers, etc.
          </li>
          <li>Maintained a high level of safety as components were tested up to 10,000 psi.</li>
          <li>Performed environmental tests such as thermal cycling, vibration and cryogenics testing.</li>
          <li>Monitored the unit's temperature using National Instruments Flex Logger via thermocouples.</li>
        </ul>

        <div style={{ fontStyle: "italic", fontSize: "18px", textAlign: "left" }}>N2 Imaging Systems - Irvine, CA</div>
        <div className="spread-content">
          <span className="resume-job-title">Test Engineer</span>
          <span>Jul 2019 - Sept 2021</span>
        </div>
        <ul>
          <li>
            Authored, revised and maintained production test procedures in compliance with MIL-STD-810 for advanced
            Hybrid Thermal/Night Vision Optics.
          </li>
          <li>Setup test stations and performed validation testing to verify functionality and uniformity.</li>
          <li>Supported the test lab to ensure anomalies were handled in an appropriate and timely manner.</li>
          <li>Performed Sand and Dust, Salt Fog and Electromagnetic Interference tests at an offsite test lab.</li>
        </ul>

        <div style={{ fontStyle: "italic", fontSize: "18px", textAlign: "left" }}>
          Hexagon Manufacturing Intelligence - Irvine, CA
        </div>
        <div className="spread-content">
          <span className="resume-job-title">Calibration Technician</span>
          <span>Nov 2018 - July 2019</span>
        </div>
        <ul>
          <li>Updated, calibrated and certified Leica Laser Trackers to specification.</li>
          <li>Calibrated and certified laser tracker accessories such as the Leica 3D Scanner.</li>
          <li>Validated calibration lab stabliity by assessing ambient vibration levels.</li>
        </ul>

        <div style={{ fontStyle: "italic", fontSize: "18px", textAlign: "left" }}>N2 Imaging Systems - Irvine, CA</div>
        <div className="spread-content">
          <span style={{ fontWeight: "bold" }}>Lead Environmental Test Technician</span>
          <span>Jan 2014 - Nov 2018</span>
        </div>
        <ul style={{ marginBottom: "5px" }}>
          <li>
            Led a team of 12 test technicians to successfully qualify hybrid thermal/night vision goggles for the U.S.
            Army's ENVGIII program, maintaining 24/7 coverage across three shifts.
          </li>
          <li>Trained technicians on environmental tests such as thermal cycling, vibration, immersion, etc.</li>
          <li>Maintained test equipment, tracked calibration dates and ensured test stations were operational.</li>
          <li>Troubleshot failures while recording a detailed log of issues observed and actions taken.</li>
        </ul>

        <div className="spread-content">
          <span style={{ fontWeight: "bold" }}>Electro-Mechanical Technician</span>
          <span>Jan 2011 - Jan 2014</span>
        </div>
        <ul>
          <li>Assembled production and prototype thermal cameras and accessories such as battery packs.</li>
          <li>Tested thermal cameras for reliability, functionality, and performance.</li>
          <li>Performed thermal and vibration environmental stress testing (ESS).</li>
        </ul>

        <div style={{ fontStyle: "italic", fontSize: "18px", textAlign: "left" }}>Ampronix - Irvine, CA</div>
        <div className="spread-content">
          <span className="resume-job-title">Calibration Technician</span>
          <span>July 2009 - Jan 2011</span>
        </div>
        <ul>
          <li>Inspected medical grade monitors for validity of repair and overall functionality.</li>
          <li>Performed chromaticity and luminosity adjustments on CRT monitors using a colorimeter.</li>
          <li>Provided technical support for products sold or repaired.</li>
        </ul>
      </div>
    </>
  );
}
