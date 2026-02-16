export default function UsbPowerStrip() {
  return (
     <>
        <h2>USB Controllable Power Strip</h2>

        <img src='./images/UsbPowerStrip/Completed 1 Port.jpg' style={{width: "40%", marginBottom: "10px"}}/>

        <p className="project-section-header" style={{marginBottom: "10px"}}>Description: 
            <span> A power strip that can be controlled by software via USB. The power strip has the option to be
                operated manually with the red push button in case a PC is unavailable. 
                A red LED above each port indicates if power is ON or OFF. 
                There is also a manual switch to kill power
                to the entire strip and it's illuminated when power is ON. 
                I provided a C# library that can be used to implement 
                automated power ON/OFF sequences in your own applications. I also included
                a desktop app to control the power strip manually from your PC. This is especially 
                useful when troubleshooting devices and software remotely.
                Currently I only have a single port strip made but the concept has 
                been proven and this could be updated to include up to 4 ports.
            </span>
        </p>

        <div style={{marginBottom: "10px"}}></div>

        <img src='./images/UsbPowerStrip/Guts Cropped.jpg' style={{width: "35%", marginBottom: "20px"}}/>   

        <p className="leftAlign">
          The power strip is controlled by an Arduino and the firmware is available on my&nbsp;  
          <a href="https://github.com/JDeats/Software-Controllable-Power-Strip-Firmware" target="_blank" rel="noopener noreferrer" title="Power Strip Firmware">github.</a>
          &nbsp;The Ardunio is not capable of powering the relay module so I used 
          an AC to DC adapter. It was a challenge to try and keep the power strip as 
          compact as possible while trying to route the wires in a clean way.
        </p>  

        <div style={{ marginBottom: "20px"}}>
            <img src='./images/UsbPowerStrip/Housing Design.jpg' style={{width: "48%", marginRight: "10px"}}/>
            <img src='./images/UsbPowerStrip/Container Flipped.jpg' style={{width: "48%"}}/>
        </div>

        <p>I designed the case in OnShape and used my 3D printer (Ender 3) to print it out. 
            The lid holds the relay module, AC to DC converter and Ardunio in place and 
            I used threaded brass inserts in the corners to screw the lid down. The 
            Ardunio is positioned vertically to reduce space.
        </p>
        
        <img src='./images/UsbPowerStrip/Desktop App.jpg' style={{width: "30%", marginBottom: "20px"}}/>

        <p>You can find a link to the C# library and desktop app on my github&nbsp;
          <a href="https://github.com/JDeats/Power-Strip-Controller" target="_blank" rel="noopener noreferrer" title="Power Strip Library and Desktop App">here.</a>
          &nbsp;To connect to the power strip, open the drop down menu and select the USB Serial Device com port the Arduino is using.
          The app will check the state of the port and update the UI to show whether it's ON or OFF.
          Pressing the ON/OFF button will toggle the port ON and OFF. If you know the power
          strip port state was switched manually you can click the sync button to resync the app 
          with the power strip. Also it will warn you if the app is out of sync with the 
          power strip when you attempt to change the port state. Finally there is a 
          power cycling feature that will power your device ON and OFF continuously
          with the amount of delay specified.
        </p>
    </>
  )
}
