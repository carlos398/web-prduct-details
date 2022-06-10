import React from 'react';
import Card from '../components/Card';
import Slider from '../components/Slider';

import '../css/Home.css';

const Home = () => {
    const images = ['asombred.jpg', '30sbackground.jpg']

    return (
        <div className='HomeContainer'>
            <div className="FirstView">
                <Slider imgs = {images}/>
                <div className="TextHomeContainer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse, sapiente dicta, fugiat voluptatibus explicabo voluptatem aut iusto porro rerum assumenda ex, enim atque. Velit corrupti, non ullam sit distinctio asperiores quibusdam voluptatem tempora officia voluptas porro amet nobis. Ab!</p>
                </div>
            </div>
            <div className="About">
                <div className="AboutImg"></div>
                <div className="AboutText">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus consequatur, delectus quidem quisquam, ducimus cum minima soluta nam rem qui? Doloribus assumenda quas at totam ipsa! Eum corporis vero maxime assumenda, at impedit voluptas in repudiandae sit ut consequatur reprehenderit dolore tempora est eius beatae expedita neque ratione laudantium.</p>
                </div>
            </div>
            <div className="Products">
                <div className="ProductsContainer">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default Home;
