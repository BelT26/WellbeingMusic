import Carousel from "react-bootstrap/Carousel";

function ImageCarousel({ images }) {
  return (
    <Carousel fade>
      {images.map((image) => (
        <Carousel.Item key={image.id}>
          <img className="d-block w-100" src={image.imgSrc} alt={image.alt} />
          <Carousel.Caption>
            <h3>{image.label}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
