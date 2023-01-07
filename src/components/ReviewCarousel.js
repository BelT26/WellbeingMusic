import Carousel from "react-bootstrap/Carousel";
import "./ReviewCarousel.css";

function ReviewsCarousel({ reviews, background }) {
  return (
    <Carousel fade variant="dark">
      {reviews.map((review) => (
        <Carousel.Item key={review.id}>
          <img
            className="d-block w-100 review_background"
            src={background}
          ></img>
          <Carousel.Caption>
            <p>
              <em>{review.text}</em>
            </p>
            <p>
              <b>- {review.author}</b>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ReviewsCarousel;
