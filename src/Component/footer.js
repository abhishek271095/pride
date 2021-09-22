import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

function Footer()
{

    return(
    <React.Fragment>
        <Container fluid className="bg-dark" >
            <Container className=" " >
                <Row className=" d-flex justify-content-center " >
                    <Col className="mt-5 text-light " xs={12} md={3} >
                       

                    <h4 className="text-center">
                        
                    <Link  to ='/Contact' className="text-decoration-none text-light">Contact Us</Link> 
                    </h4>
                    <div className="d-flex ">
                    <ul className="list-unstyled pt-2 list-inline mx-auto justify-content-center"  >
                        <li><i className="fas fa-phone p-2 text-info" ></i> 123-23-4345</li> <hr className="bg-light" />
                        <li><i className="fas fa-envelope p-2 text-info"></i> pride@example.com</li> <hr className="bg-light" />
                        <li><i className="fas fa-map-marker-alt p-2 text-info"></i> Santa Monica BLVD Mumbai</li> <hr className="bg-light" />
                    </ul>
                    </div>
                    
                    </Col>
                    <Col className="mt-5 text-light" xs={12} md={3}>
                        
                    <h4 className="text-center "> Our Project </h4>
                    <div className="d-flex ">
                    <ul className="list-unstyled pt-2 list-inline mx-auto justify-content-center"  >
                        <li><i class="fas fa-chevron-right p-2"></i> Pride Enchanta II </li>
                        <li><i class="fas fa-chevron-right p-2"></i> Pride Wilasa</li>
                        <li><i class="fas fa-chevron-right p-2"></i> Pride Enchanta</li>
                        <li><i class="fas fa-chevron-right p-2"></i> Pride Green Meadows Villas</li>
                        <li><i class="fas fa-chevron-right p-2"></i> Pride Titanium</li>
                    </ul>
                    </div>

                  

                    </Col>
                    <Col className="mt-5 text-light" xs={12} md={3}>
                      

                    <h4 className="text-center" > Latest News </h4>
                    <div className="d-flex ">
                    <ul className="list-unstyled pt-2 list-inline mx-auto justify-content-center "  >
                        <li><i class="far fa-arrow-alt-circle-right p-2"></i> Latest Release</li>
                        <li><i class="far fa-arrow-alt-circle-right p-2"></i> Pride Crosswinds Villa Plots</li>
                        <li><i class="far fa-arrow-alt-circle-right p-2"></i> Pride Vatika Villas</li>
                        <li><i class="far fa-arrow-alt-circle-right p-2"></i> Pride Green Meadows</li>
                        <li><i class="far fa-arrow-alt-circle-right p-2"></i> Pride Sunrise</li>
                    </ul>
                    </div>
                 
                    
                    </Col>
                 
                </Row>
              
                <hr className="bg-light" />
                <p className="text-light text-center p-2" > 2021@DesignBy:-abhishek271095@gmail.com </p>
            </Container>    
                
        </Container>
    </React.Fragment>

    )
}
export default Footer;
