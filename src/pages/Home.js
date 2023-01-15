import MainImageContainer from "../components/MainImageContainer";
import { Container, Row, Col, Image } from "react-bootstrap";
import NinaImage from "../images/nina_bw.jpg";
import HomeMainImage from "../images/home_landscape.png";
import "./Home.css";
import LogoList from "../components/LogoList";

function Home() {
  return (
    <div>
      <MainImageContainer>
        <Image
          fluid
          id="home_main"
          src={HomeMainImage}
          alt="group of young girls playing a clapping game to music"
        />
      </MainImageContainer>
      <Container>
        <Row style={{ marginTop: 30, marginBottom: 20, textAlign: "center" }}>
          <h1>The Good That Music Can Do</h1>
          <h2>Educate - Entertain - Include - Inspire.</h2>
        </Row>

        <Row style={{ marginTop: 30, marginBottom: 20 }}>
          <p>
            Music is a powerful thing. It has a unique ability to lift our mood,
            bring special memories back to life and connect us with others. No
            wonder it has such a key role in our wellbeing, proven to reduce
            stress and anxiety, improve memory and fitness, cognitive function
            and social interaction.
          </p>
          <p>
            Wellbeing Music provides a range of services, all music centred,
            that always have &#39;fun with music&#39; as their centrepiece.
            These services span all ages and degrees of participation - from
            newborn babies hearing the pulse of a drum to a community choir
            performing in support of a local charity.
          </p>
          <p>
            With a foundation in music psychology, sessions are always
            imaginative, engaging and educational, bringing “the good that music
            can do” to everyone.
          </p>
        </Row>
        <hr></hr>
        <Row style={{ marginTop: 30, marginBottom: 20 }}>
          <Col xs={12} lg={6} className="nina_photo">
            <Image
              fluid
              src={NinaImage}
              alt="nina smiling and conducting a choir"
            />
          </Col>
          <Col xs={12} lg={6} style={{ paddingTop: "20px" }}>
            <p>
              <em>
                "Hello, my name is Nina and I am the director of Wellbeing
                Music. I have been a singer for most of my life and have been
                making music in groups for over a decade.
              </em>
            </p>
            <em>
              <p>Under the Wellbeing Music umbrella sit:</p>
            </em>

            <ul>
              <em>
                <li>
                  Jingle Bugs - a music program for early years children, in
                  venues, nurseries, schools and community centres.
                </li>
                <li>
                  Glow Bug Parties - kids’ glow in the dark disco birthday
                  parties and school discos.
                </li>
                <li>
                  Choirs - Wellbeing Music also offers workplace choirs and
                  singing workshops.
                </li>
              </em>
            </ul>
            <p>
              <em>
                I am the choir director of the Missing People Choir for the
                national charity, East Surrey-based pop choir, Unison and
                co-direct the SASH choir for staff and volunteers at East Surrey
                Hospital.
              </em>
            </p>
            <p>
              <em>
                The Wellbeing Music Club - provides a variety of health-giving
                and educational music experiences for all ages and includes
                sessions and workshops in care homes, hospitals and schools. We
                also support community events with music."
              </em>
            </p>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Container>
        <Row></Row>
      </Container>
      <LogoList />
    </div>
  );
}

export default Home;
