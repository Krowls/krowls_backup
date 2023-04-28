import React, { useState } from 'react';
import Logo from '../../elements/logo/Logo';
import Nav from '../../common/header/Nav';
import OffcanvasMenu from './OffcanvasMenu';
import StickyHeader from './StickyHeader';
// import SwitcherHeader from '../../elements/switcher/SwitcherHeader';
import MobileMenu from './MobileMenu';
import Logo1  from '../../assets/images/logo.svg';


const HeaderOne = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const OffcanvasHandleClose = () => setShowOffcanvas(false);
    const OffcanvasHandleShow = () => setShowOffcanvas(true);

    const sticky = StickyHeader(100);

    const MobileMenuHandler = () => {
        document.querySelector('.mobilemenu-popup').classList.toggle("show");
        document.querySelector('body').classList.toggle("mobilemenu-show");

        var elements = document.querySelectorAll('.mobilemenu-popup .menu-item-has-children > a');
    
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.axil-submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
    }


    return (
        <>
            <header className="header axil-header header-style-1 bg-color-dark">
                <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-logo">
                            {/* <Logo limage="./logo.svg"
                                dimage="./images/logo.svg"
                                simage="./images/logo.svg"
                                /> */}
                                <img src={Logo1}/>
                            </div>
                            <div className="header-main-nav">
                                <Nav />
                            </div>
                            <div className="header-action">
                                <ul className="list-unstyled">
                                   
                                    <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                                        <button className="btn-wrap" onClick={MobileMenuHandler}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                    {/* <li className="my_switcher d-block d-lg-none">
                                        <SwitcherHeader />
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasMenu offcanvasShow={showOffcanvas} offcanvasHide={OffcanvasHandleClose} />
            <MobileMenu MobileHandler={MobileMenuHandler}/>
        </>
    )
}

export default HeaderOne;