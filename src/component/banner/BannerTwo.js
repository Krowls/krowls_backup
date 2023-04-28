import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import './Banner.css'


const BannerTwo = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg">
                        <div className="banner-content hero-section ">
                        {/* <h1 className="title" style={{textAlign:'center'}}>Technology &amp; design studio</h1> */}
                        <h1 className="title" style={{textAlign:"center", lineHeight:"1.2", padding:"30px", backdropFilter:"blur(20px)", color:"white"}}> Your Branding / Marketing<br/> Solution</h1>
                            <div className='button-grp'> <Link to={process.env.PUBLIC_URL + "/project-grid-one"} className="axil-btn btn-fill-primary btn-small .header-btn" style={{backgroundColor:"#fcc31e", color:"#111111"}}> Portfolio</Link>
                            <Link to={process.env.PUBLIC_URL + "/about-us"} className="about-btn">Services</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-18">
                <li className="shape shape-1">
                <AnimationOnScroll  animateIn="slideInRight" duration={1} animateOnce={true} delay={100}>
                    <img src={process.env.PUBLIC_URL + "/images/banner/banner-shape-1.png"} alt="Shape" />
                </AnimationOnScroll>
                </li>
                <li className="shape shape-2">
                <AnimationOnScroll  animateIn="slideInLeft" duration={1} animateOnce={true}>
                    <img src={process.env.PUBLIC_URL + "/images/banner/banner-shape-2.png"} alt="Shape" />
                </AnimationOnScroll>
                </li>
                <li className="shape shape-3">
                <AnimationOnScroll  animateIn="zoomIn" duration={1} animateOnce={true} delay={500}>
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Shape" />
                </AnimationOnScroll>
                </li>
                <li className="shape shape-4">
                <AnimationOnScroll  animateIn="zoomIn" duration={1} animateOnce={true} delay={500}>
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-15.png"} alt="Shape" />
                </AnimationOnScroll>
                </li>
                <li className="shape shape-5">
                <AnimationOnScroll  animateIn="zoomIn" duration={1} animateOnce={true} delay={500}>
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Shape" />
                </AnimationOnScroll>
                </li>
                <li className="shape shape-6">
                    <AnimationOnScroll  animateIn="zoomIn" duration={1} animateOnce={true} delay={500}>
                        <img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Shape" />
                    </AnimationOnScroll>
                </li>
                <li className="shape shape-7">
                    <AnimationOnScroll  animateIn="slideInDown" duration={1} animateOnce={true} delay={500}>
                        <img src={process.env.PUBLIC_URL + "/images/others/bubble-26.png"} alt="Shape" />
                    </AnimationOnScroll>
                </li>
            </ul>
        </div>
    )
}

export default BannerTwo;