import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'

function Contact()
{
    return(
        <div className="contact">
            <h4 className="text-center text-light  " style={{paddingTop: "100px"}} > Contact   </h4>
            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={6} className="d-flex text-light ">
                  
                    <ul className="list-unstyled mt-5 list-inline mx-auto justify-content-center"  >
                        <li><i className="fas fa-phone p-2 text-light" ></i> 123-23-4345</li> <hr className="bg-light" />
                        <li><i className="fas fa-envelope p-2 text-light"></i>  pride@example.com</li> <hr className="bg-light" />
                        <li><i className="fas fa-map-marker-alt p-2 text-light"></i> Santa Monica BLVD Mumbai</li> <hr className="bg-light" />
                    </ul>
                    
                    </Col>

                    <Col xs={12} md={6}>
                     <Form  className="mb-3 mt-3 ">
                        <Row className="mb-3 ">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className="text-light">First Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label className="text-light">Last Name</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            
                            </Form.Group>
                
                         </Row>

                       <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="text-light">Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mt-3 mb-5" controlId="formGridAddress2">
                        <Form.Label className="text-light">Message </Form.Label>
                        <FormControl as="textarea" aria-label="With textarea"/>
                        </Form.Group>
                        <Button variant="outline-light" type="submit"  className="mx-auto d-block w-75">
                            Submit
                        </Button>
                     </Form>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
export default Contact;
