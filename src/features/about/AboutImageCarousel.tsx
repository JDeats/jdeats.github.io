import Carousel from 'react-bootstrap/Carousel';

export default function AboutImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src='./images/AboutMe/Torrey%20Pines%20Gliderport%2010-22-25.png' style={{height: '780px'}} />
        <Carousel.Caption>
          <h4 style={{ marginBottom: "60px"}}>Torrey Pines Gliderport - San Diego</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='./images/AboutMe/Landing.jpg' style={{height: '780px'}} />
        <Carousel.Caption>
          <h4>Landing at Andy Jackson Airpark in San Bernardino</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='./images/AboutMe/Crestline%20Party.JPG' style={{height: '780px'}} />
        <Carousel.Caption>
          <h4 style={{ marginBottom: "0px"}}>Meetup at the Crestline Launch</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='./images/AboutMe/La%20Salina%20Ridge%20South.png' style={{height: '780px'}} />
        <Carousel.Caption>
          <h4 style={{ marginBottom: "20px"}}>Annual Fly-In - La Salina, Mexico</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='./images/AboutMe/Snow%20Valley%20Snowy%201-28-25.png' style={{height: '780px'}} />
        <Carousel.Caption>
          <h4 style={{ marginBottom: "20px"}}>Snow Valley in Big Bear</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='./images/AboutMe/June%20Mountain%20Sunrise%203-2-25.png' style={{height: '780px'}} />
        <Carousel.Caption>
          <h4 style={{ color: 'black', marginBottom: "20px"}}>June Mountain</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='./images/AboutMe/Mammoth%20Summit%2012-9-25.jpg' style={{height: '780px'}} />
        <Carousel.Caption>
          <h4 style={{ color: 'black', marginBottom: "20px"}}>Mammoth Mountain Summit</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='./images/AboutMe/Lake%20Tahoe%20From%20Apline%20Summit%20Express%201-15-26.jpg' style={{height: '780px'}} />
        <Carousel.Caption>
          <h4 style={{ color: 'black', marginBottom: "20px"}}>Alpine Summit at Palisades Tahoe Looking at Lake Tahoe</h4>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}
