import React from 'react';
import '../css/Card.css';

const Card = () => {
    return (
        <div className="Card">
            <div className="CardTitle">
                <h2>Title</h2>
            </div>
            <div className="CardImg">
                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
            </div>
            <div className='CardLinks'>
                <a href="#">link1</a>
                <a href="#">link2</a>
                <a href="#">link3</a>
            </div>
            <div className="CardText">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse, sapiente dicta, fugiat voluptatibus explicabo voluptatem aut iusto porro rerum assumenda ex, enim atque. Velit corrupti, non ullam sit distinctio asperiores quibusdam voluptatem tempora officia voluptas porro amet nobis. Ab!</p>
            </div>
        </div>
    );
}

export default Card;
