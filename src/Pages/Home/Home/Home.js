import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
       <> 
        <Navigation></Navigation>
        <Banner></Banner>
        <Products></Products>
        <Reviews></Reviews>
        <About></About>
        <Footer></Footer>
       </> 
    );
};

export default Home;