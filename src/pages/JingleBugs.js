import { Row, Col, Container, Image, Ratio } from "react-bootstrap";
import ReviewsCarousel from "../components/ReviewCarousel";
import JingleBugsLogo from "../images/jinglebugs_logo1.jpg";
import BabyParachute from "../images/jb_baby_parachute.jpg";
import BramblyHouse from "../images/jb_brambly_house.png";
import BramblyHouseMobile from "../images/jb_brambly_mobile.png";
import Bubbles from "../images/jb_bubbles.jpg";
import SeaCloth from "../images/jb_sea_cloth.jpg";
import SeaClothMobile from "../images/JB_sea_cloth_mobile.jpg";
import IndoorParty from "../images/jb_indoor_party.jpg";
import OutdoorParty from "../images/jinglebugs_outdoor_party.png";
import ReviewBackGround from "../images/jb_review.PNG";
import MainImageContainer from "../components/MainImageContainer";
import ContactLink from "../components/ContactLink";
import "./JingleBugs.css";

function JingleBugs() {
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
      text: "Our family loves attending the Jingle Bugs sessions. The live music, singing and opportunity to interact with a variety of musical instruments and range of props provides our daughter with real joy and excitement! It is evident that the learning experience is helping her to develop an early love for music. Nina's passion and musical talent is a real asset to the sessions. Thank you for all the fun we have at JingleBugs!",
      author: "Hannah, mum to Amelie, 2",
      id: "HANREV",
    },
  ];
  return (
    <div>
      <MainImageContainer>
        <Image
          fluid
          id="sea_cloth"
          src={SeaCloth}
          alt="group of toddlers sat with their parents on the floor around a large colourful cloth depicting sea creatures and boats"
        />
        <Image
          fluid
          id="sea_cloth_mobile"
          src={SeaClothMobile}
          alt="group of toddlers sat with their parents on the floor around a large colourful cloth depicting sea creatures and boats"
        />
      </MainImageContainer>

      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Col
            xs={12}
            className="JB_logo"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <img src={JingleBugsLogo} height={120} alt="jinglebugs logo" />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col xs={12}>
            <p>
              Jingle Bugs is a music programme designed for children from 3
              months to 5 years old. The classes are fun, engaging and
              imaginative and a wonderful place for your child to develop their
              love and understanding of music. Jingle Bugs are always moving,
              clapping, singing, sharing, laughing, exploring and playing
              instruments! Both you and your child will have a marvellous time,
              discovering and sharing the enjoyment of a children’s music class
              together!
            </p>
            <p>
              At Jingle Bugs, we emphasise the need for music to be played live.
              Classes are delivered by a professional musician, playing a live
              instrument such as a guitar or ukulele, to really draw the child
              in, to show them how expressive music can be and to inspire their
              own musical journey.
            </p>
          </Col>
        </Row>
        <hr />
        <Row style={{ marginTop: "20px" }} className="video_row">
          <Col xs={12} lg={6} style={{ padding: "30px" }}>
            <p>
              ​Jingle Bugs not only offers a broad spectrum of song-based fun to
              develop a child&#39;s love of and skill for music making, it also
              aids speech and language development, numeracy, creativity, as
              well as social and motor skills.{" "}
            </p>
            <p>
               Research tells us that music enhances a child&#39;s learning
              throughout childhood and promotes school readiness. Involvement in
              quality, engaging music activities is beneficial to all children
              and the Jingle Bugs curriculum is inclusive, with regular use of
              Makaton signing as well as diverse songs from around the world in
              a variety of languages.
            </p>
          </Col>
          <Col xs={12} lg={6} style={{ padding: "30px" }}>
            <Ratio aspectRatio="16x9">
              <iframe
                width="1013"
                height="570"
                src="https://www.youtube.com/embed/l7idwawSqIQ"
                title="Jingle Bugs music classes for babies, toddlers and preschoolers"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Ratio>
          </Col>
        </Row>
        <hr />
        <Row style={{ marginTop: "40px" }}>
          <Col xs={12} lg={7}>
            <Image fluid src={OutdoorParty} />
          </Col>
          <Col xs={12} lg={5}>
            <p className="jb_locations">
              Jingle Bugs is available in a range of settings, as regular
              weekly, fortnightly or once termly sessions in halls, nurseries
              and community centres. Currently classes take place in Reigate
              every week, following term time at the following locations: <br />
              <br />
              <b>The Colman Redland Centre</b>
              <br />
              JNA Hall
              <br />
              Croydon Road
              <br /> RH2 0NA
              <br />
              <br />
              Wednesdays
              <br />
              18m and over: 9:40-10:20am
              <br />
              Under 18m: 10:30-11:10am
              <br />
              <br />
              <b>Woodhatch Community Centre</b>
              <br />
              Whitebeam Drive
              <br />
              RH2 7LS
              <br />
              <br />
              Thursdays <br />
              Mixed age: 10:30-11:15am
              <br />
            </p>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Col xs={12} lg={6}>
            <p>
              Jingle Bugs is also a regular feature in local nurseries such as
              Daisy Chain, Reigate and Brambly House, Merstham.
            </p>
            <p>
              At the Colman Redland centre, you can try a Jingle Bugs class for
              £5 and then, you can book a block of 6 sessions (for the baby
              class, this can be spread across 7 weeks). A block is £36 (£6 x
              6).
            </p>
            <p>
              To book onto the Wednesday Colman Redland class, get in touch at{" "}
              <ContactLink
                email="info@wellbeingmusic.co.uk"
                subject="Website Enquiry"
                color="mediumslateblue"
                hover_color="cornflowerblue"
              >
                info@wellbeingmusic.co.uk
              </ContactLink>
              .
            </p>
            <p>
              To book onto Jingle Bugs at the Woodhatch Community Centre call
              the centre directly on 01737 221030.
            </p>
          </Col>
          <Col xs={12} lg={6} style={{ padding: "20px" }}>
            <Image
              fluid
              src={BramblyHouse}
              id="brambly"
              alt="group of children in a playground waving colourful scarves whilst Nina plays guitar in the background"
            />
            <Image
              fluid
              src={BramblyHouseMobile}
              id="brambly_mobile"
              alt="group of children in a playground waving colourful scarves whilst Nina plays guitar in the background"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>
              For more information about Jingle Bugs classes, to book Jingle
              Bugs for your setting or for Jingle Bugs parties, email{" "}
              <ContactLink
                email="info@wellbeingmusic.co.uk"
                subject="Website Enquiry"
                color="mediumslateblue"
                hover_color="cornflowerblue"
              >
                info@wellbeingmusic.co.uk
              </ContactLink>{" "}
              or call/text 07956 256721.
            </p>
          </Col>
        </Row>
        <ReviewsCarousel
          reviews={JingleBugsReviews}
          background={ReviewBackGround}
        />
        <Row style={{ margin: "20px 0px" }}>
          <Col xs={12} xl={3} className="jb_image">
            <img
              src={Bubbles}
              alt="children in a hall bursting lots of bubbles"
            />
          </Col>
          <Col xs={12} xl={3} className="jb_image">
            <img
              src={IndoorParty}
              alt="Nina and a small boy playing a guitar, surrounded by children in fancy dress"
            />
          </Col>
          <Col xs={12} xl={6} className="jb_image">
            <img
              src={BabyParachute}
              alt="babies and their mothers sat on the floor under a large colourful parachute"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default JingleBugs;
