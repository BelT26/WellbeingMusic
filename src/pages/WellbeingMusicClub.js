import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import MainImageContainer from "../components/MainImageContainer";
import Christmas from "../images/WMC_Christmas_Choir.png";
import ChristmasMobile from "../images/WMC_christmas_mobile.png";
import Hospital from "../images/WMC_hospital.jpg";
import SpecialNeedsChoir from "../images/WMC_special_needs_choir.jpg";
import StayAndPlay from "../images/WMC_stay_play.png";
import "./WellBeingMusicClub.css";

function WellbeingMusicClub() {
  return (
    <>
      <MainImageContainer>
        <Image
          fluid
          id="WMC_main"
          src={Christmas}
          alt="group ofpeople wearing Christmas hats and singing outdoors"
        />
        <Image
          fluid
          id="WMC_mobile"
          src={ChristmasMobile}
          alt="group ofpeople wearing Christmas hats and singing outdoors"
        />
      </MainImageContainer>
      <Container>
        <Row>
          <Col
            xs={12}
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBotton: "20px",
            }}
          >
            <h1>Wellbeing Music Club</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>
              Music is rewarding, it’s uplifting and distracting, it can help
              reduce stress, develop social and language skills and can provide
              a positive focus when needed.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={7}>
            <p>
              The Wellbeing Music Club provides a fulfilling and happy
              environment to make music in groups. This can happen in a number
              of ways and settings, for example:
            </p>
            <ul>
              <li>A primary school supporting a term’s topic through music</li>
              <li>
                In nursing homes where musical memory is so often better
                preserved than other memory loss
              </li>
              <li>
                On hospital wards to distract and reduce stress for people of
                all walks of life
              </li>
              <li>
                To challenge a young person to put their anxieties into the
                lyrics of their own song
              </li>
              <li>
                To encourage a group of asylum seekers to produce their native
                music to feel reconnected to their past
              </li>
              <li>
                To bring different generations together to enjoy each other’s
                company and to share favourite music from across the ages
              </li>
            </ul>
          </Col>
          <Col xs={12} lg={5} className="stay_play_img">
            <Image
              fluid
              src={StayAndPlay}
              alt="young children and their grandparents wearing fancy dress whilst Nina plays the guitar wearing a viking hat"
            />
          </Col>
        </Row>
        <hr />
        <Row className="special_needs_choir_row">
          <Col xs={12} lg={6}>
            <Image
              fluid
              src={SpecialNeedsChoir}
              className="special_needs_img"
            />
          </Col>
          <Col xs={12} lg={6} className="special_needs_text">
            <p>
              Hans Christian Anderson said, “Where words fail, music speaks,”
              and this is never as obvious as when verbal communication is a
              challenge, in settings where members of a group have additional
              needs.{" "}
            </p>
            <p>
              Makaton signing is an expressive and helpful tool to enhance the
              singing experience and Nina is a level 2 trained Makaton signer.{" "}
            </p>
            <p>
              Music and singing workshops for people with additional needs are
              part of the Wellbeing Music service and they are always creative,
              expressive and enjoyable.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} lg={8}>
            <p>
              The Wellbeing Music Club can happen wherever “the good that music
              can do” will enhance the experience of the users of the service.
              Nursing homes, nurseries, primary schools, charities, community
              services and events, hospitals and healthcare centres would
              benefit from the wellbeing, self-confidence, concentration,
              collaboration, talent and enjoyment that making music together can
              bring.
            </p>
            <p>
              Sessions can include singing games, percussion workshops,
              glockenspiel work, Makaton signing and singing sessions,
              composition and group singing for fun or towards a performance.
              Our sound system is also available to elevate any events your
              setting might have.
            </p>
            <p>
              Get in touch for more information on how to bring the Wellbeing
              Music Club to your setting or service.
            </p>
          </Col>
          <Col xs={12} lg={4}>
            <Image fluid src={Hospital} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WellbeingMusicClub;
