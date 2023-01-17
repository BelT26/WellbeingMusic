import { Row, Col, Container, Image, Ratio } from "react-bootstrap";
import MainImageContainer from "../components/MainImageContainer";
import "./Glowbugs.css";
import ReviewsCarousel from "../components/ReviewCarousel";
import GlowBugsLogo from "../images/glowbug_logo.jpg";
import StarWars from "../images/GB_star_wars.jpg";
import StarWarsMobile from "../images/GB_star_wars_mobile.jpg";
import GlowBug from "../images/glowbug.jpg";
import GlowBaby from "../images/gb_baby.jpg";
import GlowParty from "../images/GB_party2.jpeg";
import ReviewBackground from "../images/gb_review.PNG";

function Glowbugs() {
  const glowBugReviews = [
    {
      text: "I booked a glow in the dark disco party for my 6 year old- he wanted a Star Wars theme too. The party was perfect for him and his friends because as well as getting a chance to show off their moves, dancing to their favourite songs, they got some cool UV Star Wars facepaint done and went on an adventure to rescue Han Solo - everybody was happy!",
      author: "​Liz, mum to Henry (6)",
      id: "LIZREV",
    },
    {
      text: "Nina has hosted several school discos/parties for us now, and we have always been impressed with her energy and professionalism. Nina can be relied on to get a school hall of 160 school kids up and dancing and having a good time! I would recommend Nina 100%.",
      author: "Daisy Goggin, Reigate Parish School PTA",
      id: "DSYREV",
    },
    {
      text: "My 2 year old loves Jingle Bugs music classes and by the end of her party so did all her little friends! There was a brilliant mix of songs, activities, puppets and fun characters as well as parachute games, bubbles and the usual fantastic choice of instruments. Total success, thank you!",
      author: "Charlotte, mum to Ella (2)",
      id: "CHAREV",
    },
  ];

  return (
    <>
      <MainImageContainer>
        <Image
          fluid
          src={StarWars}
          className="glowbugs_main_image"
          id="star_wars"
          alt="children dressed in star wars costumes and waving glow sticks"
        />
        <Image
          fluid
          src={StarWarsMobile}
          id="star_wars_mobile"
          className="glowbugs_main_image"
          alt="children dressed in star wars costumes and waving glow sticks"
        />
      </MainImageContainer>
      <Container style={{ padding: "10px 50px" }}>
        <Row style={{ marginBottom: "20px" }}>
          <Col xs={12} style={{ textAlign: "center" }}>
            <img src={GlowBugsLogo} height={140} alt="Glow Bugs Logo" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4}>
            <p className="gb_intro">
              Glow Bug Parties are the perfect hi-energy, fun-packed, exciting
              birthday entertainment for your child and his/her friends! Based
              in East Surrey, our glow in the dark disco parties guarantee a
              fantastic, stress-free celebration for your 4-8 year old.
            </p>

            <p>
              {" "}
              We also provide music activity disco parties for 1-3 year olds as
              well as school discos and nursery discos - we are regular
              suppliers for various local primary and preschools.
            </p>
          </Col>
          <Col className="gb_video_col" xs={12} lg={8}>
            <Ratio aspectRatio="16x9">
              <iframe
                width="1013"
                height="570"
                src="https://www.youtube.com/embed/BjqK_NBrmQI"
                title="Glow Bug Parties in Surrey and surrounding areas"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Ratio>
          </Col>
        </Row>
        <hr />
        <Row className="gb_girls_row">
          <Col xs={12} lg={6} className="gb_girls_img">
            <Image
              fluid
              src={GlowParty}
              alt="Children at a party having fun and wearing glow bands"
            />
          </Col>
          <Col xs={12} lg={6} className="gb_girls_text">
            <p>
              Glow Bug Parties feature UV and disco lighting, a professional
              sound system, glowsticks and glow in the dark facepainting. 
              Activities include limbo, bubbles, games with prizes, inflatables
              including guitars and microphones, pom poms, a dress up hat box,
              dance routines and karaoke.
            </p>
            <p>
              The party can follow a theme if you have one, i.e Harry Potter,
              Under the Sea, Frozen, Star Wars etc.
            </p>
            <Row>
              <Col className="gb_logo_col">
                <img src={GlowBug} height={45} />
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row style={{ margin: "20px 0px" }}>
          <Col xs={12} lg={8}>
            <p>
              Glow Bug Parties typically last 2 hours, with a pause of say 20
              minutes, about an hour into the party, for tea/cake. It’s very
              handy to have a space that can be made fairly dark, whether in
              your home for a smaller party, or a hired hall. Set up time for a
              Glow Bug party is an hour, slightly less for a music activity
              younger party.
            </p>
            <p>
              Prices start at £160 for 15 children for a 2 hour party, with
              additional children at £2 each.{" "}
            </p>
            <p>
              Glow Bug parties operate primarily within a radius of 10 miles of
              Reigate, Surrey. We also travel further afield with a small
              surcharge for travel time /costs.
            </p>
          </Col>
          <Col xs={12} lg={4} style={{ textAlign: "center" }}>
            <img
              src={GlowBaby}
              id="glow_baby"
              alt="baby wearing glow in the dark make up"
            />
          </Col>
        </Row>
        <ReviewsCarousel
          reviews={glowBugReviews}
          background={ReviewBackground}
        />
      </Container>
    </>
  );
}

export default Glowbugs;
