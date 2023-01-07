import { Row, Col, Container, Carousel } from "react-bootstrap";
import ImageCarousel from "../components/ImageCarousel";
import ReviewsCarousel from "../components/ReviewCarousel";
import JingleBugsLogo from "../images/jinglebugs_logo1.jpg";
import JingleBug from "../images/jinglebug.jpg";
import BabyParachute from "../images/jb_baby_parachute.jpg";
import BramblyHouse from "../images/jb_brambly_house.png";
import Bubbles from "../images/jb_bubbles.jpg";
import Scrunchie from "../images/jb_scrunchie.PNG";
import SeaCloth from "../images/jb_sea_cloth.jpg";
import IndoorParty from "../images/jinglebugs_indoor_party.jpg";
import ReviewBackGround from "../images/jb_review.PNG";

function JingleBugs() {
  const CarouselImages = [
    {
      imgSrc: BramblyHouse,
      alt: "group of children waving colourful scarves in a garden with Nina playing the guitar in the background",
      id: "BHIM",
    },
    {
      imgSrc: SeaCloth,
      alt: "group of toddlers and parents sat around a large cloth containing images of the sea",
      id: "SCIM",
    },
    {
      imgSrc: BabyParachute,
      alt: "babies and their mothers sat on the floor under a large colourful parachute",
      id: "BPIM",
    },
  ];

  const JingleBugsReviews = [
    {
      text: "I have explored many different mother and baby/toddler sessions. It was only Nina’s sessions which I felt brought the magical combination of musicality, developmental awareness, creativity and fun which the boys (and I) so enjoyed. My sons and the other children got so much out of her sessions - both in terms of their musical development, but also in their confidence, ability to listen, pay attention and interact with others.",
      author: "Alix, mum to Ewan, 5 and Leon, 2",
      id: "ALIXREV",
    },
    {
      text: "Nina brightens up our week, she has been holding weekly classes at Brambly House for nearly 4 years and continues to offer the children variety and new learning experiences. Her positivity is contagious and her planned classes with flexibility to be spontaneous always keeps the children engaged. Every child should have a Nina in their lives to bring joy to music and movement in such an innate way.",
      author:
        "​Tamsyn Hendry (owner of Brambly House Montessori Nursery, Merstham)",
      id: "TAMSREV",
    },
    {
      text: "The highlight of our week! Nina is an enthusiastic, inspirational and talented musician/preschool teacher. The class is fun and a joy to attend.",
      author: "Caroline, mum to Sophie, 4 and Jack, 2",
      id: "CAROREV",
    },
    {
      text: "Our family loves attending the Jingle Bugs sessions. The live music, singing and opportunity to interact with a variety of musical instruments and range of props provides our daughter with real joy and excitement! It is evident that the learning experience is helping her to develop an early love for music. Nina&#39;s passion and musical talent is a real asset to the sessions. Thank you for all the fun we have at JingleBugs!",
      author: "Hannah, Amelie&#39;s mum (2 year old)",
      id: "HANREV",
    },
  ];
  return (
    <div>
      <ImageCarousel images={CarouselImages} />
      <Container>
        <Row>
          <Col xs={12} className="JB_logo">
            <img src={JingleBugsLogo} height={200} alt="jinglebugs logo" />
          </Col>
        </Row>
        <p>
          Jingle Bugs is a music programme designed for children from 3 months
          to 5 years old. The classes are fun, engaging and imaginative and a
          wonderful place for your child to develop their love and understanding
          of music. Jingle Bugs are always moving, clapping, singing, sharing,
          laughing, exploring and playing instruments! Both you and your child
          will have a marvellous time, discovering and sharing the enjoyment of
          a children’s music class together!
        </p>
        <p>
          At Jingle Bugs, we emphasise the need for music to be played live.
          Classes are delivered by a professional musician, playing a live
          instrument such as a guitar or ukulele, to really draw the child in,
          to show them how expressive music can be and to inspire their own
          musical journey.
        </p>
        <p>
          ​Jingle Bugs not only offers a broad spectrum of song-based fun to
          develop a child&#39;s love of and skill for music making, it also aids
          speech and language development, numeracy, creativity, as well as
          social and motor skills.  Research tells us that music enhances a
          child&#39;s learning throughout childhood and promotes school
          readiness. Involvement in quality, engaging music activities is
          beneficial to all children and the Jingle Bugs curriculum is
          inclusive, with regular use of Makaton signing as well as diverse
          songs from around the world in a variety of languages.
        </p>
        <h4>Where can I join a Jingle Bugs session?</h4>
        <p>
          Jingle Bugs is available in a range of settings, as regular weekly,
          fortnightly or once termly sessions in halls, nurseries and community
          centres. Currently classes take place in Reigate every week, following
          term time at the following locations: <br />
          The Colman Redland Centre, the JNA hall, Croydon Road RH2 0NA
          <br />
          Wednesday mornings: 18m and over: 9:40-10:20am, under 18m:
          10:30-11:10am
          <br />
          Woodhatch Community Centre, Whitebeam Drive RH2 7LS
          <br />
          Thursday mornings: mixed age: 10:30-11:15am
          <br />
        </p>
        <p>
          Jingle Bugs is also a regular feature in local nurseries such as Daisy
          Chain, Reigate and Brambly House, Merstham.
        </p>
        <h4>How can I book?</h4>
        <p>
          At the Colman Redland centre, you can try a Jingle Bugs class for £5
          and then, you can book a block of 6 sessions (for the baby class, this
          can be spread across 7 weeks). A block is £36 (£6 x 6).
        </p>
        <p>
          To book onto the Wednesday Colman Redland class, get in touch at
          <a href="info@wellbeingmusic.co.uk">info@wellbeingmusic.co.uk</a>
        </p>
        <p>
          To book onto Jingle Bugs at the Woodhatch Community Centre call the
          centre directly on 01737 221030.
        </p>
        <p>
          For more information about Jingle Bugs classes, to book Jingle Bugs
          for your setting or for Jingle Bugs parties, email{" "}
          <a href="info@wellbeingmusic.co.uk">info@wellbeingmusic.co.uk</a> or
          call/text 07956 256721.
        </p>
      </Container>
      <ReviewsCarousel
        reviews={JingleBugsReviews}
        background={ReviewBackGround}
      />
    </div>
  );
}

export default JingleBugs;
