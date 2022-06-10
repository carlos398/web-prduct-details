import { useState } from 'react';
import '../css/Slider.css';

const Slider = (props) => {

    const images = props.imgs
    const [selectedIndex, setSelectedIndex] =  useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    /**
     * 
     * @param {string[]} images this is the array of images that are going to be displayed
     * @param {boolean} next this is a boolean that indicates if the image is going to be selected next or previous
     */
     const selectNewImage = (images, next = true) => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length - 1);
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex)
     }

    const prevImage = () => selectNewImage(images, false);

    const nextImage = () => selectNewImage(images);

    return (
        <div className="SliderContainer">
            <img src={require(`../images/${selectedImage}`)} alt={selectedImage} />
            <div className='btnContainer'>
                <button onClick={prevImage}>{"<"}</button>
                <button onClick={nextImage}>{">"}</button>
            </div>
        </div>
    );
}

export default Slider;
