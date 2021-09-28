import {React} from 'react';
import { Button, Col, Container, Row} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import About from './About.js';
import Blog from './Blog.js';
import Service from './Service.js';
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Footer from './footer.js';


function Home()
{
    return(
        <div className="">
            <Carousel>
  <Carousel.Item className="banner">
        
        <h1 className="text-light text-center display-1 heading" > Where <span className="text-info"> Green </span> is a way of  <span className="text-info"> Life </span> </h1>
        <Button  variant="light" className="p-1 w-25 mt-5 mx-auto d-block" > READ MORE</Button>

  </Carousel.Item>

  <Carousel.Item className="banner1">
   
  <h1 className="text-light text-center display-1 heading" > We  <span className="text-info"> Build </span> your <span className="text-info"> Dream </span> </h1>
  <Button  variant="light" className="p-1 w-25 mt-5 mx-auto d-block" > READ MORE</Button>

  </Carousel.Item>


  <Carousel.Item  className="banner2">
   
  <h1 className="text-light text-center display-1 heading" > Best <span className="text-info"> builders </span> in India </h1>
  <Button  variant="light" className="p-1 w-25 mt-5 mx-auto d-block" > READ MORE</Button>

  </Carousel.Item>
</Carousel>


<Container fluid className="bg-light">
  <h2 className="text-center pt-5  "> About Us </h2> 
  <Container>
  <Row className="mt-3 ">
    
    <Col className="abhi" xs={12} md={6}>
    <Image src="../images/building3.png" className="d-block w-100" fluid/>
 

    </Col>
    <Col xs={12} md={6}>
          <Alert variant="">
          <Alert.Heading className="display-3 pt-5"> PRIDE BUILDCON </Alert.Heading>
          <h4 className="pt-2 text-secondary">
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
          </h4>
          <hr />
          <h4 className="mb-0">
            -Robert John
          </h4>
        </Alert>
    </Col>
  </Row>
  </Container>
</Container>  


<Container fluid className="bg-light">
  <h2 className="pt-5 text-center"> Services </h2> 
  <Container>
  <Container>
            <CardGroup className="mt-5">
                <Card className="m-3 border border-secondary">
                    <Card.Img variant="top" src="../images/b2.jpg" />
                    <Card.Body>
                    <Card.Title>Pride Aloma Aquena Towers</Card.Title>
                    <Card.Text>
                    Pride Aloma Aquena Towers by Pride at Baner Pune is one of the most sought after residential project in Baner Pune of the recent times.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated  04 months ago</small>
                    </Card.Footer>
                </Card>
                <Card className="m-3 border border-secondary">
                    <Card.Img variant="top" src="../images/b3.jpg" />
                    <Card.Body>
                    <Card.Title>Pride Park Royale</Card.Title>
                    <Card.Text>
                    Pride Park Royale project is registered on rera with following RERA Ids:-P51800001315(Park Royale Ab Wing), P51800001144(Park Royale C D Wing). {' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated  05 months ago</small>
                    </Card.Footer>
                </Card>
                <Card className="m-3 border border-secondary">
                    <Card.Img variant="top" src="../images/b1.jpg" />
                    <Card.Body>
                    <Card.Title>Pride Sunrise</Card.Title>
                    <Card.Text>
                    The project offers apartment with perfect combination of contemporary architecture and features to provide comfortable living
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated  02 months ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>

            </Container>

            <Container>
            <CardGroup className="mt-5 ">
                <Card className="m-3 mb-5 border border-secondary">
                    <Card.Img variant="top" src="../images/buildind1-400X600.jpg" />
                    <Card.Body>
                    <Card.Title>Pride Crosswinds Villa Plots</Card.Title>
                    <Card.Text>
                    A beautiful canvas of nature awaits, upon which you may paint the home of your dreams. Ensconced within the safe havens of an exclusive gated community.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 07 months ago</small>
                    </Card.Footer>
                </Card>
                <Card className="m-3 mb-5 border border-secondary">
                    <Card.Img variant="top" src="../images/buildind2-400X600.jpg" />
                    <Card.Body>
                    <Card.Title>Pride Vatika Villas</Card.Title>
                    <Card.Text>
                    It also has amenities like basketball court, jogging track, lawn tennis court and ,swimming pool.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated  01months ago</small>
                    </Card.Footer>
                </Card>
                <Card className="m-3 mb-5 border border-secondary">
                    <Card.Img variant="top" src="../images/buildind3-400X600.jpg" />
                    <Card.Body>
                    <Card.Title>Pride Park Royale C D Wing</Card.Title>
                    <Card.Text>
                    Park royale in andheri (east), mumbai andheri-dahisar by pride group and rashi developers is a residential project.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated  15 days ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
            </Container>

  </Container>
</Container>

<Footer/>


        </div>
       
    )
}
export default Home;

