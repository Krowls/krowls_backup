import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderTwo from '../common/header/HeaderTwo';
import SEO from '../common/SEO';
import BannerTwo from '../component/banner/BannerTwo';
import BlogOne from '../component/blog/BlogOne';
import BrandOne from '../component/brand/BrandOne';
import CounterUpOne from '../component/counterup/CounterUpOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';
import ProjectTwo from '../component/project/ProjectTwo';
import ProjectThree from '../component/project/ProjectThree';
import ProjectFour from '../component/project/ProjectFour';
import ProjectFive from '../component/project/ProjectFive';
import ServicePropOne from '../component/service/ServicePropOne';
import TestimonialOne from '../component/testimonial/TestimonialOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import HeaderOne from '../common/header/HeaderOne'
import Hthree from '../common/header/HeaderThree'
import Hfour from '../common/header/HeaderFour'
import Clients from './Clients';
// import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const CreativeAgency = () => {

    return (
        <>
        <SEO title="Creative Agency"/>
        {/* <ColorSwitcher /> */}
        <main className="main-wrapper">
            {/* <HeaderTwo /> */}
            <HeaderOne/>
            <BannerTwo />
            <div className="section section-padding-2 bg-color-dark">
                <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we can help you with"
                        description="Nulla facilisi. Nullam in magna id dolor 
                        blandit rutrum eget vulputate augue sed eu imperdiet."
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className='row'>
                        <ServicePropOne colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="6" />
                    </div>
                </div>
                <ul className="list-unstyled shape-group-10">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt="Circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt="Circle" /></li>
                </ul>
            </div>
          {/* <!-- /.swiper --> */}
        {/* </div> */}
            <Clients />
            {/* <BrandOne /> */}
            <ProjectTwo parentClass="bg-color-dark"/>
            <CounterUpOne />
            <TestimonialOne />
            {/* <BlogOne /> */}
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default CreativeAgency;

