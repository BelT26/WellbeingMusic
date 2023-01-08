import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import SeatedChoir from "../images/choir_seated.jpg";
import ParkChoir from "../images/unison_choir.jpg";
import EveningChoir from "../images/choir_evening.jpg";

function Choirs() {
  return (
    <>
      <Container style={{ padding: "0px 70px" }}>
        <Row>
          <Col xs={12}>
            <Image
              fluid
              src={ParkChoir}
              alt="women wearing Unison Choir T shirts singing in a park"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Choirs</h1>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col xs={12}>
            <p>
              It’s crazy how many people think they don’t have a good singing
              voice! The onslaught of TV shows making fun of anyone who can’t
              sing stunningly well has been so damaging for people’s singing
              confidence. But singing is really a part of being human. It’s so
              important for self- expression, creativity and connecting with
              emotions. And there’s no better way to sing than in a choir,
              supported and encouraged by a group of like-minded people, all
              passionate singers!
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col xs={12} lg={7}>
            <p>
              When choosing a choir - and choose a choir you really ought to,
              for all the physical, mental and social benefits – you really want
              one where you can feel at ease, you love the chosen music and feel
              like you’re being pushed in your ability to sing and your
              understanding of music. These things help create an experience
              that you’ll look forward to from one rehearsal to the next and
              will make you feel a sense of wellbeing and belonging which can be
              all too often lost from everyday life, where people very rarely
              come together as a collective in sync with each other. This is the
              sort of experience our forefathers would have been all too
              familiar with, when community was more close knit, making music
              was a social pastime among friends and family and screentime
              didn’t play such a big part in our lives. Singing is a joyful
              experience and hearing the lovely sounds you will help create in
              your choir will give you an enormous sense of achievement and
              happiness. And that’s a beautiful thing indeed!
            </p>
          </Col>
          <Col xs={12} lg={5}>
            <Image fluid src={SeatedChoir} alt="choir sat in a hall singing" />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Fancy joining a choir?</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
            <h3>Unison Choir</h3>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <p>
              Unison Choir is a fab, friendly pop choir! The repertoire of
              choice is a brilliant blend of old and new, contemporary and
              classic pop tunes - it spans all chart music of the past 60+
              years. The choir meets in Redhill at the wonderful United Reformed
              Church, Hatchlands Road RH1 6AU, every 2nd and 4th Thursday (and
              5th if there is one) of the month from 7:45 to 9:45pm. The
              rehearsals are every fortnight to make sure even the busiest life
              can accommodate choir time!
            </p>
            <p>
              Unison is open to all, with no auditions and no need to read
              music, just enjoy the fun and exhilaration of singing together!
            </p>
            <p>
              Since it started in 2018, Unison have performed live many times,
              supported local charity events, been recorded by a music producer
              and raised over £3000 for our chosen charities. Keep an eye on our
              Facebook page for updates on all things Unison,
              www.facebook.com/unisonpopchoir You can try us for free, so why
              wait any longer? Contact info@wellbeingmusic.co.uk for more
              information.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
            <h3>Missing People Choir</h3>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col xs={12} lg={5}>
            <Image
              fluid
              src={EveningChoir}
              alt="people singing christmas carols on a street during the evening"
            />
          </Col>
          <Col xs={12} lg={7}>
            <p>
              Nina is also choir director of the Missing People Choir – the
              choir for the national charity supporting families of people who
              have experienced the ambiguous loss of a loved one. The choir
              consists of members, their family and friends, volunteers and
              staff of the charity and its associated agencies. The choir was
              formed in 2016 and came second at Britain’s Got Talent in 2017.
              The choir is a big part of the face of the charity and is a
              sanctuary for its members who are a supportive and formidable
              group of singers. The choir regularly performs at the charity’s
              and community events, fundraising for Missing People.
            </p>
            <p>
              Rehearsals are in central London, every 1st Saturday of the month
              from 2-6pm. If you’d like to join, support or donate to the choir
              contact choir@missingpeople.org.uk for more information.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
            <h3>Choirs and Workshops</h3>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <p>
              If you’d like to form a choir in your workplace or community or
              you’d like Wellbeing Music to deliver a choir workshop, get in
              touch at info@wellbeingmusic.co.uk
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Choirs;
