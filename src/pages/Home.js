import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NinaImage from "../images/nina.jpg";
import HomeMainImage from "../images/home_landscape.png";
import HomeMobileImage from "../images/home_mobile.png";
import "./Home.css";
import LogoList from "../components/LogoList";

function Home() {
  return (
    <div>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <img
          id="home_main"
          src={HomeMainImage}
          alt="group of young girls playing a clapping game to music"
        />
      </Container>
      <Container>
        <Row style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}>
          <h1>Educate - Entertain - Include - Inspire.</h1>
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
          <Col>
            <img
              src={NinaImage}
              height={450}
              alt="nina smiling and conducting a choir"
            />
          </Col>
          <Col>
            <p>
              <em>
                "Hello, my name is Nina and I am the director of Wellbeing
                Music. I have been a singer for most of my life and have been
                making music in groups for over a decade."
              </em>
            </p>
            <p>Under the Wellbeing Music umbrella sit:</p>
            <ul>
              <li>
                Jingle Bugs - a music program for early years children, in
                venues, nurseries, schools and community centres.
              </li>
              <li>
                Glow Bug Parties - kids’ glow in the dark disco birthday parties
                and school discos.
              </li>
              <li>
                Choirs - Wellbeing Music also offers workplace choirs and
                singing workshops.
              </li>
            </ul>
            <p>
              <em>
                "I am the choir director of the Missing People Choir for the
                national charity, East Surrey-based pop choir, Unison and
                co-direct the SASH choir for staff and volunteers at East Surrey
                Hospital."
              </em>
            </p>
            <p>
              <em>
                The Wellbeing Music Club - provides a variety of health-giving
                and educational music experiences for all ages and includes
                sessions and workshops in care homes, hospitals and schools. We
                also support community events with music.
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
