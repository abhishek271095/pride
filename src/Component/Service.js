import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap';

function Service()
{
    return(
        <div className="service ">
            <Container fluid>
            <h4 className="text-center text-dark  " style={{paddingTop: "100px"}} >Our Services </h4>
            <Container>
                <Row >

            

                <CardGroup>
                <Card className="m-4  border border-secondary">
                    <Card.Img variant="top" src="../images/buildind1-600X600.jpg" />
                    <Card.Body>
                    <Card.Title>Pride Enchanta II </Card.Title>
                    <Card.Text>
                    Pride has launched its premium housing project, Enchanta Phase 2, in Vijay Nagar, Bangalore. The project offers 2, 3 BHK Apartment from 1175 sqft to 1910 sqft in Bangalore West.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Possession Start Date Oct'21</small>
                    </Card.Footer>
                </Card>
                <Card className="m-4 border border-secondary">
                    <Card.Img variant="top" src="../images/buildind2-600X600.jpg" />
                    <Card.Body>
                    <Card.Title>Pride Wilasa</Card.Title>
                    <Card.Text>
                    Wilasa presents the un-imaginable prospect of being in lush green surroundings and yet be so closely connected to the heart of the city. Wilasa, spread across 5 green acres.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Possession Start Date Dec'17</small>
                    </Card.Footer>
                </Card>
                <Card className="m-4  border border-secondary">
                    <Card.Img variant="top" src="../images/buildind3-600X600.jpg" />
                    <Card.Body>
                    <Card.Title>Pride Enchanta</Card.Title>
                    <Card.Text>
                    At Pride Enchanta, we understand what your heart longs for in your dream home. More importantly, what you love to have in its neighbourhood. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Possession Start Date Jan'19</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
                      
                </Row>    

            
            </Container>

            </Container>
           
            

            
        </div>
    )
}
export default Service;
