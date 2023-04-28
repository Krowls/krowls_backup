import React from 'react';
import FormOne from '../contact/FormOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';
import './About.css';


const AboutTwo = () => {
    return (
        <div className="section-padding bg-color-dark">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">About Us</span>
                                <h3 className="title">Why branding matters?</h3>
                                <p>Creating a unique and memorable visual identity that sets our client's brand apart from the competition and resonates with their target audience.</p>
                            </div>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><FaCompress /> Brand Recognition</Accordion.Header>
                                    <Accordion.Body>
                                    A well-designed logo can help customers recognise and remember a brand easily. A strong logo can help businesses stand out in a crowded market and create a lasting impression on their audience.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><FaCode /> Brand Identity</Accordion.Header>
                                    <Accordion.Body>
                                    Logo & branding help businesses establish their unique identity in the market. Branding goes beyond a logo and encompasses elements such as brand voice, colors, typography, and imagery that create a consistent image for the brand.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><FaGlobe /> Credibility and Professionalism</Accordion.Header>
                                    <Accordion.Body>
                                    A professional-looking logo and branding make a business appear more credible and trustworthy. It gives customers confidence in the quality of products or services offered by the business.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header><FaGlobe /> Differentiation</Accordion.Header>
                                    <Accordion.Body>
                                    Logo & branding can help businesses differentiate themselves from competitors. A unique and memorable logo and branding can help a business distinguish itself from similar businesses in the same industry.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header><FaGlobe /> Loyalty</Accordion.Header>
                                    <Accordion.Body>
                                    Strong branding can foster customer loyalty. When customers identify with a brand, they are more likely to become repeat customers and refer others to the business.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1 bg-color-dark">
                        <div className="contact-form-box shadow-box mb--30 bg-color-dark">
                            <h3 className="title">Get a free Keystroke quote now</h3>
                            <FormOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo;