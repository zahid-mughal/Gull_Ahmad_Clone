import './slider.css'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../../../asset/slide1.jpg'
import slide2 from '../../../asset/slide2.jpg'
import slide3 from '../../../asset/slide3.jpg'
import slide4 from '../../../asset/slide4.jpg'
import slide5 from '../../../asset/slide5.jpg'
import slide6 from '../../../asset/slide6.jpg'
import slide7 from '../../../asset/slide7.jpg'

 function Slider(){
    return(
  <div>

<Carousel className="p-0 m-0">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide4}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide5}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide6}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide7}
      alt="Second slide"
    />
  </Carousel.Item>

</Carousel>

  </div>
    )
}
export default Slider;
