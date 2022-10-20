import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../NavBar/Nav';


const Landing = () => {
    return ( 
        <div className='landingContainer'>
            <Nav />
            <section className='landingWeAre'>
                <p className='oscuretextlanding'>WE</p>
                <p className='oscuretextlanding'>ARE</p>
                <p className='lightextlanding'>ONE</p>
            </section>
            <section className='titleLanding'>
                <p>SINGLE STACK</p>
            </section>    
            <Footer />
        </div>
     );
}
 
export default Landing;