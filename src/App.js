import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Mission from './components/Mission/Mission';
import Carousel from './components/Carousel/Carousel';
import StyleSajda from './components/StyleSajda/StyleSajda';
import About_2 from './components/About_2/About_2';
import DesignProject from './components/DesignProject/DesignProject';
import Request from './components/Request/Request';
import About_3 from './components/About_3/About_3';
import FinModel from './components/FinModel/FinModel';
import About_4 from './components/About_4/About_4';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';




function App() {
    return (
        <>
            <Header/>
            <Main/>
            <About/>
            <Mission/>
            <Carousel/>
            <StyleSajda/>
            <About_2/>
            <DesignProject/>
            <Request/>
            <About_3/>
            <FinModel/>
            <About_4/>
            <Contacts/>
            <Footer/>
      
       
        
        </>
    );
}

export default App;

    // 1200 и больше - col-xl-(2,3,4,5,6 и т.д)
    // между 1200 и 992 - col-lg-(2,3,4,5,6 и т.д)
    // между 992 и 768 - col-md-(2,3,4,5,6 и т.д)
    // между 768 и 576 - col-sm-(2,3,4,5,6 и т.д)
    // 576 и меньше - col-(2,3,4,5,6 и т.д) 