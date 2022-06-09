import React from 'react';
import Slider from '../components/Slider';

const Home = () => {
    const images = ['asombred.jpg', '30sbackground.jpg']

    return (
        <div className='HomeContainer'>
            <Slider imgs = {images}/>
            <div className="TextHomeContainer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse, sapiente dicta, fugiat voluptatibus explicabo voluptatem aut iusto porro rerum assumenda ex, enim atque. Velit corrupti, non ullam sit distinctio asperiores quibusdam voluptatem tempora officia voluptas porro amet nobis. Ab!</p>
            </div>
        </div>
    );
}

export default Home;
