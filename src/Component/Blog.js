import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


function Blog()
{
    return(
        <div className="blog ">
              <h4 className="text-center text-light  " style={{paddingTop: "100px"}} >Blog </h4>
            <Container fluid>
                <Container>
                    <Row className="mt-5">
                        <Col xs={12} md={6}>
                        <h4 className="text-center text-light display-3 pt-2">Expand  Your Money  Presence  and Save up for Your Dream Goals </h4>
                    <p  className="text-center  text-light  pt-4"> Aww yeah, you successfully read this important alert message. This example
                         text is going to run a bit longer so that you can see how spacing within 
                         an alert works with this kind of content.</p>

                         <Button variant="outline-light" className="mx-auto d-block w-25 p-2 mt-4"  >Light</Button>
                        </Col>
                        <Col xs={12} md={6}>
                        
                        <Image src="../images/test4.jpg"  roundedCircle fluid className="d-block mx-auto mt-5"/>
                        <h6 className="text-center text-light p-2"> Robert John </h6>

                        </Col>

                    </Row>
                </Container>
            </Container>



        </div>
    )
}
export default Blog;
