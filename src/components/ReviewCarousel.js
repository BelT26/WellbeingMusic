import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ReviewsCarousel({ reviews }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {reviews.map((review) => (
        <Carousel.Item>
          <div className="d-block w-100 carousel-background">
            <Carousel.Caption>
              <p>
                <em>{review.text}</em>
              </p>
              <p>
                <b>- {review.author}</b>
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ReviewsCarousel;
